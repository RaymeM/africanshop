require("dotenv/config");
require("./db");
const express = require("express");

const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 3000;

const shopsRoute = require("./routes/shops");

const constrollers = require("./controllers/shops");
const { models } = require("mongoose");

app.use(cors());
app.use(express.json());

app.use("/shops", shopsRoute);
/* app.use("/posts", postsRoute); */

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
