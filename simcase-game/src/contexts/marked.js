import React from "react";

// import tasksJson from "../data/tasks.json";
import { DataContext } from "../contexts/data";

const MarkedContext = React.createContext();

function MarkedProvider(props) {
  const dataContext = React.useContext(DataContext);
  const [user, setUser] = React.useState([]);

  function handleMarked(id, cant, number) {
    setUser(current => ({
      ...current,
      [dataContext.id]: {
        ...current[dataContext.id],
        [id.substr(-1)]: number
      }
    }));
    for (let i = parseInt(id.substr(-1)) + 1; i < cant; i++) {
      setUser(current => ({
        ...current,
        [dataContext.id]: {
          ...current[dataContext.id],
          [i]: number
        }
      }));
    }
  }

  // const [tasks, setTasks] = React.useState(null);
  // const [tasksSolution, setTasksSolution] = React.useState({});

  // React.useEffect(() => {
  //   if (dataContext.id !== null) {
  //     setTasks(Object.entries(tasksJson.scenarios[dataContext.id].tasks));
  //   }
  // }, [dataContext.id]);

  // React.useEffect(() => {
  //   if (dataContext.id !== null) {
  //     setTasksSolution(
  //       tasks.reduce((tasks, [taskId, task], i) => {
  //         return {
  //           ...tasks,
  //           [i]: task.solution_station
  //         };
  //       }, {})
  //     );
  //   }
  // }, [tasks]);

  const value = {
    user: user,
    handleMarked: handleMarked,
    handleColor: handleColor
  };

  return <MarkedContext.Provider value={value} {...props} />;
}

export { MarkedProvider, MarkedContext };
