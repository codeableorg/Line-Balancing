import React from "react";

const DataContext = React.createContext();

function DataProvider(props) {
  const [id, setId] = React.useState(null);
  const [ranking, setRanking] = React.useState(false);

  React.useEffect(() => {
    id > 4 ? setRanking(true) : setRanking(false);
  }, [id]);

  const value = {
    id: id,
    ranking: ranking,
    setId: setId
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
