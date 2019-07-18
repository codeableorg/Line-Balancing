/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";

function Walkthrough(props) {
  const { onClose, openComponent, isComponentOpen } = props;

  return (
    <Component isOpen={isComponentOpen}>
      <div>
        <Dialog isOpen={openComponent} onDismiss={openComponent}>
          <main>
            <h2>Walkthrough</h2>
            <img
              src="/assets/img/walkthrough.gif"
              alt="Walkthrough to use the app"
            />
            <ul id="walkthrough">
              <li>Read the problem statement</li>
              <li>Check the table</li>
              <li>Some text</li>
              <li>Some more text</li>
              <li>Finally the end og the list</li>
            </ul>
            <button onClick={onClose}>X</button>
          </main>
        </Dialog>
      </div>
    </Component>
  );
}

export default Walkthrough;
