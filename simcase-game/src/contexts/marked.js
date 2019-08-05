/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { DataContext } from "../contexts/data";
import { FeedbackContext } from "../contexts/feedback";

const button = {
  border: "none",
  width: "96px",
  height: "36px",
  margin: "0 10px",
  borderRadius: "2px",
  background: "#fff",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
  textAlign: "center",
  letterSpacing: "0.0357143em",
  color: "#014D40",
  transition: "all 0.25s ease-in-out"
};

const buttonMarked = { ...button, background: "#8d62e1", color: "#fff" };
const buttonDefault = { ...button, background: "#F0F4F8", color: "#014D40" };
const buttonRed = { ...button, background: "#EF767A", color: "#fff" };
const buttonGreen = { ...button, background: "#C6F7E2" };

const MarkedContext = React.createContext();

function MarkedProvider(props) {
  const dataContext = React.useContext(DataContext);
  const feedbackContext = React.useContext(FeedbackContext);
  const [user, setUser] = React.useState([]);

  function handleMarked(id, cant, number) {
    setUser(current => ({
      ...current,
      [dataContext.id]: {
        ...current[dataContext.id],
        [id.substr(-1)]: number
      }
    }));
    for (let i = parseInt(id.substr(-1)) + 1; i < cant; i++) {
      setUser(current => ({
        ...current,
        [dataContext.id]: {
          ...current[dataContext.id],
          [i]: number
        }
      }));
    }
  }

  function handleColor(game, pos, task, station) {
    if (feedbackContext.state) {
      if (Object.keys(user).length === 0 && task.solution_station === station) {
        return buttonRed;
      } else {
        if (task.solution_station === station) {
          return buttonGreen;
        } else if (user[game][pos] === station) {
          return buttonRed;
        } else {
          return button;
        }
      }
    } else {
      if (user[game] !== undefined) {
        if (user[game][pos] === station) {
          return buttonMarked;
        } else if (task.default_station === station) {
          return buttonDefault;
        } else {
          return button;
        }
      } else {
        if (task.default_station === station) {
          return buttonDefault;
        } else {
          return button;
        }
      }
    }
  }

  function handleBlock(game, pos, station) {
    if (user[game] === undefined) {
      return false;
    } else if (feedbackContext.state) {
      return true;
    } else if (user[game][pos] > station) {
      return true;
    } else if (user[game][pos] === 1 && station === 3) {
      return true;
    }
  }

  const value = {
    user: user,
    setUser: setUser,
    handleMarked: handleMarked,
    handleColor: handleColor,
    handleBlock: handleBlock
  };

  return <MarkedContext.Provider value={value} {...props} />;
}

export { MarkedProvider, MarkedContext };
