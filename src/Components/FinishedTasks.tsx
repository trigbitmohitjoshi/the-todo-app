import { TasksType } from "../Types/todoapp";
import TasksContainer from "./TasksContainer";
import TaskItem from "./TaskItem";

const FinishedTasks = ({ finishedTasks }: { finishedTasks: TasksType }) => {
  if (finishedTasks.length === 0) {
    return <p>No task is finished yet</p>;
  }

  return (
    <>
      <TasksContainer>
        {finishedTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </TasksContainer>
    </>
  );
};

export default FinishedTasks;
