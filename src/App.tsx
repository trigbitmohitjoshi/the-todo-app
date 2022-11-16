import AllTasks from "./Components/AllTasks";
import AppHeading from "./Components/AppHeading";
import GlobalStyles from "./Components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import PendingTasks from "./Components/PendingTasks";
import FinishedTasks from "./Components/FinishedTasks";
import AddTask from "./Components/AddTask";
import AppContainer from "./Components/AppContainer";
import React from "react";
import { createCollectionsInIndexedDB } from "./Utils/createCollectionsInIndexedDB";
import { AllTasksReducerAction, AllTasksReducerState } from "./Types/todoapp";

import ClearFinishedTasks from "./Components/ClearFinishedTasks";
import { allTasksReducer } from "./Reducer/allTasksReducer";
const initialState = {
  browserSupportIndexedDb: true,
  allTasks: [],
};
export type TodoAppContextType = {
  state: AllTasksReducerState;
  dispatch: React.Dispatch<AllTasksReducerAction>;
} | null;
export const TodoAppContext = React.createContext<TodoAppContextType>(null);
const App = () => {
  const [state, dispatch] = React.useReducer(allTasksReducer, initialState);

  React.useEffect(() => {
    createCollectionsInIndexedDB(dispatch);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <AppHeading />
        {state.browserSupportIndexedDb ? (
          <>
            <TodoAppContext.Provider value={{ state, dispatch }}>
              <AddTask />
              <NavBar />
              <Routes>
                <Route
                  index
                  path="/"
                  element={<AllTasks allTasks={state.allTasks} />}
                />
                <Route
                  path="/pending"
                  element={
                    <PendingTasks
                      pendingTasks={state.allTasks.filter(
                        (value) => value.state === "pending"
                      )}
                    />
                  }
                />
                <Route
                  path="/finished"
                  element={
                    <FinishedTasks
                      finishedTasks={state.allTasks.filter(
                        (value) => value.state === "finished"
                      )}
                    />
                  }
                />
              </Routes>
              {state.allTasks.length > 0 && <ClearFinishedTasks />}
            </TodoAppContext.Provider>
          </>
        ) : (
          <p>Browser doesn't support IndexedDb</p>
        )}
      </AppContainer>
    </>
  );
};

export default App;
