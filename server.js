const Router = require("express");
const cors = require("cors");
const fs = require("fs");

const app = Router();
app.use(Router.json());
app.use(cors({ origin: ["http://127.0.0.1:5501"], credentials: true }));

app.post("/logging", (req, res) => {
  const opString = req.body?.reduce((prev, log) => prev + `${log?.type}: ${log?.value}\n`, "");
  //fs.appendFile("./logs.txt", opString, (err) => {}); //this will reload the browser if you use server to serve the html file
  console.log(opString);
  //   res.json({ output: opString });
  res.sendStatus(204); //no content
});

app.listen(5000, () => {
  console.log("connected...");
});
