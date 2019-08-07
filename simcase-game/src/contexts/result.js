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
  const [successTime, setSuccessTime] = React.useState({});
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

  function handleSuccessTime() {
    if (dataContext.id !== null) {
      const tasks = Object.entries(tasksJson.scenarios[dataContext.id].tasks);
      const result = tasks
        .map(e => {
          return [e[1].solution_station, e[1].time];
        })
        .reduce((total, [station, time]) => {
          return {
            ...total,
            [station]: total[station] ? total[station] + time : time
          };
        }, 0);
      setSuccessTime({
        ...successTime,
        [dataContext.id]: result
      });
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
          [dataContext.id]: Math.round((1 / maxResult) * 144000)
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
          [dataContext.id]: 0,
          total: score.total + 0
        });
      }
    }
  }

  const value = {
    preFeedback: preFeedback,
    mistakes: mistakes,
    time: time,
    score: score,
    successTime: successTime,
    handlePreFeedback: handlePreFeedback,
    handleMistakes: handleMistakes,
    handleTime: handleTime,
    handleSuccessTime: handleSuccessTime
  };

  return <ResultContext.Provider value={value} {...props} />;
}

export { ResultProvider, ResultContext };
