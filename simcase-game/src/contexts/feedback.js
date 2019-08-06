import React from "react";

import { DataContext } from "../contexts/data";

const FeedbackContext = React.createContext();

function FeedbackProvider(props) {
  const dataContext = React.useContext(DataContext);
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    if (dataContext.ranking) {
      setState(true);
    }
  }, [dataContext.id]);

  const value = {
    state: state,
    setState: setState
  };

  return <FeedbackContext.Provider value={value} {...props} />;
}

export { FeedbackProvider, FeedbackContext };
