const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = 8000 || process.env.PORT;
const routes = require('./PlanesRoutes');

require('dotenv').config();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connect to MONGO'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`We are listenning on ${PORT}`)
})