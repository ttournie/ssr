/*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - Page body
  */
export const injectHTML = (
  data,
  { html, title, css, meta, body, scripts, state }
) => {
  data = data.replace(
    "</head>",
    `<style type="text/css">${[...css].join("")}</style></head>`
  );
  data = data.replace(/<title>.*?<\/title>/g, `<title>${title}</title>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return data;
};
