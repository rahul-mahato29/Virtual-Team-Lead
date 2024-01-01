const express = require("express");
const app = express();
const port = 3000;

//linking route files to the main server
const registrationRoutes = require('./routes/registration');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');

app.use('/api/registration', registrationRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/logout', logoutRoutes);



app.get("/", (req, res) => {
    res.send("Hello 2024");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});