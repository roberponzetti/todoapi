const express = require('express');
// const cors = require('cors');

const app = express();
// app.use(cors());

// Settings (ports, app name, etc)
app.set('port', process.env.PORT || 3000 )

// Middlewares (functions that execute before process info )
app.use(express.json()); // if we receive a json, our express module will understand it

// Routes
app.use(require('./routes/todolist'));

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})