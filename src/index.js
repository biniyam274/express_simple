const express = require('express');

const sayHello = require('./routes/sayHello');
const app = express();

app.use(require('body-parser').json());

app.get('/greetings/:name', sayHello);

const PORT = 3000;

app.listen(PORT, "", () => {
    console.log(`Listening on port http://localhost:${PORT}/greetings/VenturX`)
})