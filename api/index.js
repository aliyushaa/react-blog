    const express = require('express');
    const app = express();
    const dotenv = require('dotenv');
    const mongoose = require('mongoose');
    const authRoute = require('./routes/users');

    dotenv.config();
    app.use(express.json());

    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));


    app.use("/api/auth", require('./routes/auth'));

    app.listen("5000", () => {
        console.log("Server is running on port 5000");
    });