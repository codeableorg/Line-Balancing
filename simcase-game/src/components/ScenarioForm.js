/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ImageContainer from "../components/ImageContainer";
import TaskList from "../components/TaskList";
import { Statement, Table } from "../components/ui";
import { MainContent } from "../components/helpers";

function ScenarioForm({ id }) {
  return (
    <>
      <MainContent>
        <Statement>
          Balance production to increase production. Use the radio buttons to
          shift tasks between adjacent workers. Good Luck!
        </Statement>
        <ImageContainer id={id} />
        <Table>
          <div>Tasks</div>
          <div>Station 1</div>
          <div>Station 2</div>
          <div>Station 3</div>
        </Table>
        <TaskList id={id} />
      </MainContent>
    </>
  );
}

export default ScenarioForm;
