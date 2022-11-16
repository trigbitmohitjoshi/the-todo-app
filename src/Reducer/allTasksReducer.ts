import { AllTasksReducerAction, AllTasksReducerState } from "../Types/todoapp";
import { AllTasksActions } from "../Utils/constants";

export const allTasksReducer = (
  state: AllTasksReducerState,
  action: AllTasksReducerAction
) => {
  switch (action.type) {
    case AllTasksActions.SET_ALL_TASKS:
      return {
        ...state,
        allTasks: state.allTasks.concat(action.payload),
      };

    case AllTasksActions.BROWSER_SUPPORT_INDEXED_DB:
      return { ...state, browserSupportIndexedDb: action.payload };

    case AllTasksActions.UPDATE_TASK:
      const allTasksArray1 = [...state.allTasks];
      const eleNeedToBeUpdate = allTasksArray1.filter(
        (value) => value.id === action.id
      );
      const indexOfEleNeedToBeUpdate = allTasksArray1.indexOf(
        eleNeedToBeUpdate[0]
      );
      allTasksArray1.splice(indexOfEleNeedToBeUpdate, 1, action.payload);
      return {
        ...state,
        allTasks: [...allTasksArray1],
      };

    case AllTasksActions.DELETE_TASK:
      const allTasksArray2 = [...state.allTasks];
      const eleNeedToBeDelete = allTasksArray2.filter(
        (value) => value.id === action.id
      );
      const indexOfEleNeedToBeDelete = allTasksArray2.indexOf(
        eleNeedToBeDelete[0]
      );
      allTasksArray2.splice(indexOfEleNeedToBeDelete, 1);
      return {
        ...state,
        allTasks: [...allTasksArray2],
      };

    default:
      return state;
  }
};
