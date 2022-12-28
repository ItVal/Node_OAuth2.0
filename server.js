const express = require ('express');
const port=4000;
const app = express();

const utils = require ('./utils');

//redirect route
app.get ('/auth', async (req, res) => {
    try {
      res.redirect (utils.request_get_auth_code_url);
    } catch (error) {
      res.sendStatus (500);
      console.log (error.message);
    }
  });

app.listen(port, () => console.log("server listening on port : " + port))