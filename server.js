import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('/*', (req, res) => {
  const context = {}; //will come back later
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const htmlString = `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `;
  res.send(htmlString);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
