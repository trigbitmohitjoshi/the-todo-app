import { AllTasksReducerAction } from "../Types/todoapp";
import { deleteTaskFromIndexedDb } from "./deleteTaskFromIndexedDb";
// this function is responsible for clearing only those task which are finished from store and app's state
export const clearFinishedTasks = (
  dispatch: React.Dispatch<AllTasksReducerAction>
) => {
  const idb = window.indexedDB;
  const IdbOpenRequest = idb.open("the-todo-app-database", 1);
  // on opening IndexedDB successfuly
  IdbOpenRequest.onsuccess = () => {
    const dbRef = IdbOpenRequest.result;
    // create a transtion for Object store(tasks-object-store) of readwite type
    const dbTransaction = dbRef.transaction("tasks-object-store", "readwrite");
    // get ref to object store(tasks-object-store)
    const objectRef = dbTransaction.objectStore("tasks-object-store");
    // getting all data from object store
    const clearingfinishedTasks = objectRef.getAll();
    // on successfuly getting all data from store
    clearingfinishedTasks.onsuccess = () => {
      // clearing those tasks which are finished from store as well as from app's state
      clearingfinishedTasks.result.forEach((task) => {
        if (task.state === "finished")
          deleteTaskFromIndexedDb(dispatch, task.id);
      });
      // on completing transcation we close the dbRef
      dbTransaction.oncomplete = () => {
        dbRef.close();
      };
    };
  };
};
