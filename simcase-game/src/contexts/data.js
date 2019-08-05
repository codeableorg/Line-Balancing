import React from "react";

const DataContext = React.createContext();

function DataProvider(props) {
  const [id, setId] = React.useState(null);
  const [ranking, setRanking] = React.useState(false);
  const [rule, setRule] = React.useState(true);

  const value = {
    id: id,
    ranking: ranking,
    rule: rule,
    setId: setId,
    setRanking: setRanking,
    setRule: setRule
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
