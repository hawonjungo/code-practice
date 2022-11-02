import React from "react";
import { BrowserRouter } from "react-router-dom";

// import WebRouter from "./components/WebRouter";
import WebRouter from "./components/knowRouter/WebRouter";

const App = () => {
  return (
    //BrowserRouter working as Routing mechanism for whole website ( if wrap them all)
    <div>
      <BrowserRouter>
        <WebRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
