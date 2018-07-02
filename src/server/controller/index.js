import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";
import WithStylesContext from "../../hocs/WithStyleContext";
import App from "../../App";
import { injectHTML } from "../helper/server";
// Simply render the App and send it.
const pageController = () => (req, res) => {
  fs.readFile("./index.html", "utf8", (err, htmlData) => {
    if (err) {
      console.error("Read error", err);

      return res.status(404).end();
    }

    const css = new Set(); // CSS for all rendered React components

    const reactApp = renderToString(
      <WithStylesContext
        onInsertCss={(...styles) =>
          styles.forEach(style => css.add(style._getCss() || ""))
        }
      >
        <App />
      </WithStylesContext>
    );
    const RenderedApp = injectHTML(htmlData, {
      body: reactApp,
      title: "My Universal rendered page",
      css: css
    });
    res.send(RenderedApp);
  });
};

export default pageController;
