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
  const [mistakes, setMistakes] = React.useState({});

  React.useEffect(() => {
    if (tasksContext.solution !== undefined) {
      setPreFeedback({
        total: Object.keys(tasksContext.solution).length,
        mistakes: 0
      });
    }
  }, [tasksContext.solution]);

  function handleMistakes(value) {
    if (dataContext.id !== null) {
      setMistakes({
        ...mistakes,
        [dataContext.id]: value
      });
    }
  }

  function handlePreFeedback() {
    if (dataContext.id !== null && markedContext.user.length !== 0) {
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
    } else if (dataContext.id !== null) {
      setPreFeedback({
        ...preFeedback,
        mistakes: 100
      });
    }
  }

  const value = {
    preFeedback: preFeedback,
    mistakes: mistakes,
    handlePreFeedback: handlePreFeedback,
    handleMistakes: handleMistakes
  };

  return <ResultContext.Provider value={value} {...props} />;
}

export { ResultProvider, ResultContext };
