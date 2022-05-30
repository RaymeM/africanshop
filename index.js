require("dotenv/config");
require("./db")
const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

const shopsRoute = require('./routes/shops');




app.use(express.json());

app.use("/shops", shopsRoute);










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

