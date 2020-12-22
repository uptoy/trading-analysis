const express = require('express')
const env = require('dotenv')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

env.config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.aegyg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
).then(() => {
    console.log('Database connected')
});
app.use(express.json())

app.use(cors())
app.listen(process.env.PORT, () => console.log(`connected server ${process.env.PORT}`))