const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members API Routes
app.use('/api/mats', require('./routes/api/mats'));
app.use('/api/amount', require('./routes/api/amount'));
app.use('/api/quests', require('./routes/api/quests'));


app.put("/api/quests", (request,response) => {
    response.json(request.body);
    //added this response things cuz of some github post but still got same error
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
