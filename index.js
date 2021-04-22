const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const cities = require('./routes/cities');
const weather = require("./routes/weather");

const app = express();
app.use(cors());
app.options('*', cors());

mongoose.set('useCreateIndex', true);

const mongooseURL =
    `mongodb+srv://kozlov:1234567890@mycluster.4fb6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3000;

async function start() {
    let dataBase = await mongoose.connect(mongooseURL, {useUnifiedTopology: true, useNewUrlParser: true,
        useFindAndModify: false});

    app.use("/weather", weather);

    cities.init(dataBase);
    app.use('/favorites', cities.router);

    app.listen(PORT, () => {
        console.log('Server has been started...');
    });
}

start();