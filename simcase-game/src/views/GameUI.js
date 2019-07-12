import React from "react";
import Statement from "../components/Statement";
import ImageContainer from "../components/ImageContainer";
import TitlesForm from "../components/TitlesForm";
import TaskList from "../components/TaskRowList";
import Submit from "../components/Submit";
import Header from "../components/Header";

function App() {
  return (
    <div>
      <Header />
      <Statement />
      <ImageContainer />
      <TitlesForm />
      <TaskList />
      <Submit />
    </div>
  );
}

export default App;
