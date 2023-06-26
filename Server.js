const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();

const routes = require("./routes/TaskRout");

const cors = require('cors');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", routes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

