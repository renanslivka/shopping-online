const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postCharge = require("./stripe");
const subscribeWithMailchimp = require("./mailchimp");
require("dotenv").config();

const sendEmail = require("./send-email");
const app = express();
const router = express.Router();
/* const axios = require("axios"); */

const port = process.env.PORT || 5000;

app.use(cors());
router.post("/payment", postCharge);

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use("/payment", router);
app.use("/send", router);
app.use("/subscribe", router);
//app.use(express.static(path.join(__dirname, "../client/build")));

/* app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
}); */

app.post("/send", sendEmail);

app.post("/subscribe", subscribeWithMailchimp);

app.listen(port, () => console.log(`server running on port ${port}`));
