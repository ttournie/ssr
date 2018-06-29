import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";
import App from "../../App";
import { injectHTML } from "../helper/server";
// Simply render the App and send it.
const pageController = () => (req, res) => {
  fs.readFile(
    path.resolve(__dirname, "../../../build/index.html"),
    "utf8",
    (err, htmlData) => {
      if (err) {
        console.error("Read error", err);

        return res.status(404).end();
      }
      const reactApp = renderToString(<App />);
      const RenderedApp = injectHTML(htmlData, {
        body: reactApp,
        title: "My Universal rendered page"
      });
      res.send(RenderedApp);
    }
  );
};

export default pageController;
