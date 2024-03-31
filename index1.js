import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
//app.use(express.json())
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/Public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/Public/signup.html");
});

app.get("/forgotpassword", (req, res) => {
  res.sendFile(__dirname + "/Public/forgotpass.html");
});

app.post("/landing", (req, res) => {
  console.log(req.body);
});

app.post("/login", (req, res) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
