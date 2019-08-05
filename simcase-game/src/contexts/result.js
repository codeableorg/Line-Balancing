import React from "react";

import { DataContext } from "./data";
import { TasksContext } from "./tasks";
import { MarkedContext } from "./marked";

const ResultContext = React.createContext();

function ResultProvider(props) {
  const dataContext = React.useContext(DataContext);
  const tasksContext = React.useContext(TasksContext);
  const markedContext = React.useContext(MarkedContext);
  const [preFeedback, setPreFeedback] = React.useState({});

  React.useEffect(() => {
    if (tasksContext.solution !== undefined) {
      setPreFeedback({
        total: Object.keys(tasksContext.solution).length,
        mistakes: 0
      });
    }
  }, [tasksContext.solution]);

  function handlePreFeedback() {
    if (dataContext.id !== null) {
      let count = 0;
      for (let i = 0; i < preFeedback.total; i++) {
        if (
          markedContext.user[dataContext.id][i] !== tasksContext.solution[i]
        ) {
          count++;
        }
      }
      setPreFeedback({
        ...preFeedback,
        mistakes: count
      });
    }
  }

  const value = {
    preFeedback: preFeedback,
    handlePreFeedback: handlePreFeedback
  };

  return <ResultContext.Provider value={value} {...props} />;
}

export { ResultProvider, ResultContext };
