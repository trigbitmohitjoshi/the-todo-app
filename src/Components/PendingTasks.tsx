import { TasksType } from "../Types/todoapp";
import TasksContainer from "./TasksContainer";
import TaskItem from "./TaskItem";

const PendingTasks = ({ pendingTasks }: { pendingTasks: TasksType }) => {
  if (pendingTasks.length === 0) {
    return <p>No Pending Task</p>;
  }

  return (
    <>
      <TasksContainer>
        {pendingTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </TasksContainer>
    </>
  );
};

export default PendingTasks;
