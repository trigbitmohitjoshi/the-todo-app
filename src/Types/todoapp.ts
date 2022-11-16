import { AllTasksActions } from "../Utils/constants";

export type TaskType = {
  id: number;
  taskTitle: string;
  state: "pending" | "finished";
};
export type TasksType = TaskType[];

export type AllTasksReducerState = {
  allTasks: TasksType;
  browserSupportIndexedDb: boolean;
};

export type AllTasksReducerAction = {
  type: AllTasksActions;
  payload: any;
  id?: number;
};
