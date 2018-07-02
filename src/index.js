import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WithStylesContext from "./hocs/WithStyleContext";
// import registerServiceWorker from "./registerServiceWorker";

/**
 * Helpermethod for bundling inline styles,
 * needed for getting all styles of child components
 * when compiling static .html file
 */
const insertCss = (...styles) => {
  styles.forEach(style => {
    // eslint-disable-next-line no-underscore-dangle
    styles._insertCss();
  });
};

ReactDOM.render(
  <WithStylesContext onInsertCss={insertCss}>
    <App />, document.getElementById("root")
  </WithStylesContext>
);
//registerServiceWorker();
