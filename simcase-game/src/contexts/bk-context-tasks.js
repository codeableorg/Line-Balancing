// import tasksJson from "../data/tasks.json";

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
