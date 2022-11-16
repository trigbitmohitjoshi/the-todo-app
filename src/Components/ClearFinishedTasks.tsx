import React from "react";
import { TodoAppContext } from "../App";
import ClearFinishedTasksContainer from "./ClearFinishedTasksContainer";
import { clearFinishedTasks } from "../Utils/clearFinishedTasks";

const ClearFinishedTasks = () => {
  const { dispatch } = React.useContext(TodoAppContext)!;
  return (
    <ClearFinishedTasksContainer
      onClick={() => {
        clearFinishedTasks(dispatch);
      }}
    >
      Clear Finished Tasks
    </ClearFinishedTasksContainer>
  );
};

export default ClearFinishedTasks;
