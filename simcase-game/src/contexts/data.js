import React from "react";

const DataContext = React.createContext();

function DataProvider(props) {
  const [id, setId] = React.useState(null);
  const [ranking, setRanking] = React.useState(false);

  const value = {
    id: id,
    ranking: ranking,
    setId: setId,
    setRanking: setRanking
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
