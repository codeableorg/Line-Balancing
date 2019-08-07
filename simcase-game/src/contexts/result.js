import React from "react";

import tasksJson from "../data/tasks.json";
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
  const [time, setTime] = React.useState({});
  const [score, setScore] = React.useState({});

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
    if (dataContext.id !== null) {
      if (markedContext.user[dataContext.id]) {
        let count = 0;
        console.log(dataContext.id);
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
      } else {
        setPreFeedback({
          ...preFeedback,
          mistakes: 100
        });
      }
    }
  }

  function handleTime() {
    if (dataContext.id !== null) {
      const tasks = Object.entries(tasksJson.scenarios[dataContext.id].tasks);
      if (markedContext.user[dataContext.id]) {
        const result = Object.values(markedContext.user[dataContext.id])
          .map((e, i) => {
            return [e, tasks[i][1].time];
          })
          .reduce((total, [station, time]) => {
            return {
              ...total,
              [station]: total[station] ? total[station] + time : time
            };
          }, {});
        const maxResult = Math.max(...Object.values(result));
        setTime({
          ...time,
          [dataContext.id]: result
        });
        setScore({
          ...score,
          [dataContext.id]: maxResult
        });
      } else {
        setTime({
          ...time,
          [dataContext.id]: {
            1: 0,
            2: 0,
            3: 0
          }
        });
        setScore({
          ...score,
          [dataContext.id]: 0
        });
      }
    }
  }

  // function handleMaxTime() {
  //   if (dataContext.id !== null) {
  //     if (markedContext.user.length !== 0) {

  //     } else {
  //       setTime({
  //         ...time,
  //         [dataContext.id]: 0
  //       });
  //     }
  //     setTime({
  //       ...time,
  //       total: Object.values(time).reduce((a, e) => a + e, 0)
  //     });
  //   }
  // }

  const value = {
    preFeedback: preFeedback,
    mistakes: mistakes,
    time: time,
    score: score,
    handlePreFeedback: handlePreFeedback,
    handleMistakes: handleMistakes,
    handleTime: handleTime
  };

  return <ResultContext.Provider value={value} {...props} />;
}

export { ResultProvider, ResultContext };
