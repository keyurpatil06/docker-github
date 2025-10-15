const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Keyur'));

app.listen(3000, () => console.log(`App running`));

module.exports = app;