import React from "react";
// import WebRouter from "./components/WebRouter";
import Button from "./components/knowCSS/Button";

const App = () => {
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

export default App;
