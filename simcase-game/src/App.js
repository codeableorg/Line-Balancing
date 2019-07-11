/** @jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
import Welcome from "./components/Welcome";
import Role from "./components/Role";
import Walkthrough from "./components/Walkthrough";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Global
        styles={{ body: { margin: 0, padding: 0, fontFamily: "sans-serif" } }}
      />
      <Header />
      <Welcome />
      <Role />
      <Walkthrough />
    </>
  );
}

export default App;
