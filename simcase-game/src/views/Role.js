/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";

function Role(props) {
  const { onClose, openComponent, isComponentOpen } = props;

  return (
    <Component isOpen={isComponentOpen}>
      <div>
        <Dialog isOpen={openComponent} onDismiss={openComponent}>
          <main>
            <h2>Role</h2>
            <img
              src="/assets/img/rolePic.gif"
              alt="Role"
              css={{ width: 300 }}
            />
            <p id="role">Role message for students</p>
            <button onClick={onClose}>X</button>
          </main>
        </Dialog>
      </div>
    </Component>
  );
}

export default Role;
