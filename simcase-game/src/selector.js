import { useSelector, shallowEqual } from "react-redux";

export default function useTotalScore() {
  return useSelector(state => state, shallowEqual);
}
