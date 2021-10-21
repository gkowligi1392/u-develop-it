// import express
const express = require('express');

// add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
// Make sure this is the last route!!
app.use((req, res) => {
    res.status(404).end();
});

// start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});