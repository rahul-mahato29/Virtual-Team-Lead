const express = require("express");
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const mongoURI = 'Database-link'; 

//linking route files to the main server
const registrationRoutes = require('./routes/registration');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');

app.use('/api/registration', registrationRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/logout', logoutRoutes);


//mongooDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get("/", (req, res) => {
    res.send("Hello 2024");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});