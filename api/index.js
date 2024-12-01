const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, res) => {
    console.log("Test Passed");
    res.send("Hello");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})