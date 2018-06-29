export const htmlTemplate = content => `
<!doctype html>
<html>
  <head>
  </head>
  <body>
    SERVER SIDE RENDERING
    <div id="app"><div>${content.html}</div></div>
  </body>
</html>
`;
