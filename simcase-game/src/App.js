/** @jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
import Content from "./components/ContentProvider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Global
        styles={{ body: { margin: 0, padding: 0, fontFamily: "sans-serif" } }}
      />
      <Header viewTitle="welcome" />
      <h1>Simcase</h1>
      {/* Feel free to manipulate <Content> as the next three lines only show the component capabilities */}
      <Content css={{}} requiredContent="welcome" />
      <Content requiredContent="role" />
      <Content requiredContent="walkthrough" />
    </>
  );
}

export default App;
