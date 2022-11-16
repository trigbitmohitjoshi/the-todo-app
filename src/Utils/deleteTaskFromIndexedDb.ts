import { AllTasksReducerAction } from "../Types/todoapp";
import { AllTasksActions } from "./constants";

// this function is responsible for deleting task from store and from app's state
export const deleteTaskFromIndexedDb = (
  dispatch: React.Dispatch<AllTasksReducerAction>,
  id: number
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
    // deleting data to object store
    const deletingTask = objectRef.delete(id);
    // on successfuly deleting data to store
    deletingTask.onsuccess = () => {
      // on completing transcation we close the dbRef
      dbTransaction.oncomplete = () => {
        // deleting a task from app's state
        dispatch({
          type: AllTasksActions.DELETE_TASK,
          payload: [],
          id: id,
        });
        dbRef.close();
      };
    };
    // on failing deleting data to store
    deletingTask.onerror = () => {
      alert("Task is not added");
    };
  };
};
