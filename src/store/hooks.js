import Context from "./Context";
import { useContext } from "react";

export const useStore = () => {
  // assign state
  const [state, dispatch] = useContext(Context);

  // return an array
  return [state, dispatch];
};
