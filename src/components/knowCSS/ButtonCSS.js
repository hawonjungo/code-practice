import React from "react";
import Button from "./components/knowCSS/Button";
const ButtonCSS = () => {
  // component Button will have a prop as primary.
  return (
    <div>
      {" "}
      <Button />
      <Button primary />
      <Button secondary />
    </div>
  );
};

export default ButtonCSS;
