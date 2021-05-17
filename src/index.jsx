import React, { Fragment } from "react";
import { render } from "react-dom";

import "./styles/styles.css";

const App = () => (
  <Fragment>
    <h1>React App</h1>
    <p>Antares</p>
  </Fragment>
);

render(<App />, document.getElementById("root"));
