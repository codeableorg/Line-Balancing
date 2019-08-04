import React from "react";

const FeedbackContext = React.createContext();

function FeedbackProvider(props) {
  const [state, setState] = React.useState(false);

  const value = {
    state: state,
    setState: setState
  };

  return <FeedbackContext.Provider value={value} {...props} />;
}

export { FeedbackProvider, FeedbackContext };
