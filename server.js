const express = require("express");
const port = 4000;
const app = express();
const cors = require("cors");
const utils = require("./utils");

//redirect route

app.use(cors());
app.get("/auth", async (req, res) => {
  try {
    res.redirect(utils.request_get_auth_code_url);
  } catch (error) {
    res.sendStatus(500);
    console.log(error.message);
  }
});

//
app.get("/api/callback", async (req, res) => {
  // ! get authorization token from request parameter
  const authorization_token = req.query.code;
  console.log(authorization_token);
  try {
    // ! get access token using authorization token
    const response = await utils.get_access_token(authorization_token);
    // console.log({ data: response });
    // get access token from payload
    // const { access_token } = response.data;
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack });
  }
});

app.listen(port, () => console.log("server listening on port : " + port));
