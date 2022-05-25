const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

const shopsRoute = require('./routes/shops');
//const commentsRoute = require('./routes/comments');


app.use(express.json());

app.use("/shops", shopsRoute);
//app.use("/comments", commentsRoute);









app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

