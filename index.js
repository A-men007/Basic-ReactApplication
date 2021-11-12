import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// <li>{topNums[0]}</li>
// <li>{topNums[1]}</li>
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
