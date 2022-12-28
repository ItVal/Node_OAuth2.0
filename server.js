const express = require ('express');
const port=4000;
const app = express();
app.get ('/auth', async (req, res) => {
  res.send("auth route")
});
app.listen(port, () => console.log("server listening on port : " + port))