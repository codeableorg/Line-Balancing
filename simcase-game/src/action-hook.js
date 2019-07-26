import React from "react";
import { useDispatch } from "react-redux";
import addScore from "./action";

export function useAddScore() {
  const dispatch = useDispatch();
  return React.useCallback(score => dispatch(addScore(score)), [dispatch]);
}
