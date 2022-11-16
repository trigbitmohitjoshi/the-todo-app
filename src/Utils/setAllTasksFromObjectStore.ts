import { AllTasksReducerAction } from "../Types/todoapp";
import { AllTasksActions } from "./constants";
// this function is responsible for setting all tasks from IndexedDb Object Store(tasks-object-store) to App's state
export const setAllTasksFromObjectStore = (
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
    const gettingTask = objectRef.getAll();
    // on successfuly getting data from store
    gettingTask.onsuccess = () => {
      // setting all data from store in app state
      dispatch({
        type: AllTasksActions.SET_ALL_TASKS,
        payload: gettingTask.result,
      });
      dbTransaction.oncomplete = () => {
        // on completing transcation we close the dbRef
        dbRef.close();
      };
    };
  };
};
