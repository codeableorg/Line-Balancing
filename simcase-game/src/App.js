/** @jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
import Content from "./controllers/contentController";
import Header from "./controllers/headerController";

function App() {
  return (
    <>
      <Global
        styles={{ body: { margin: 0, padding: 0, fontFamily: "sans-serif" } }}
      />
      <Header />
      <h1>Simcase</h1>
      {/* Feel free to manipulate <Content> as the next three lines only show the component capabilities */}
      <Content css={{}} requiredContent="welcome" />
      <Content requiredContent="role" />
      <Content requiredContent="walkthrough" />
    </>
  );
}

export default App;
