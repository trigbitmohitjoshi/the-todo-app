import styled from "styled-components";

const TasksContainer = styled.div`
  > div {
    display: grid;
    align-items: center;
    grid-template-columns: 0.5fr 3fr 1fr;
    background-color: var(--color-grey);
    border-radius: 0.4rem;
    padding: 1rem 0.6rem;
    margin-bottom: 1rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    transition: all 0.25s ease-out;
    &:hover {
      background-color: hsl(0, 0%, 80%);
    }
    .check-box {
      input {
        cursor: pointer;
      }
    }
    .edit-task {
      input {
        border: 1px solid var(--color-light-dark);
        outline: none;
        border-radius: 0.4rem;
        background-color: var(--color-grey);
        padding: 0.4rem 0.6rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--color-dark);
      }
    }
    .task-title {
      p {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--color-dark);
      }
    }
    .button-group {
      justify-self: center;
      font-size: 1.2rem;
      > * {
        cursor: pointer;
      }
      #tick-btn {
        color: green;
      }
      #edit-btn {
        color: dodgerblue;
      }
      #delete-btn {
        color: red;
      }
      span {
        margin: 0 0.4rem;
      }
    }
  }
`;

export default TasksContainer;
