const express = require('express');
const connectionDb = require("./config/dbconnection");
require('dotenv').config(); // Make sure this is called before other code
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Database connection
connectionDb();
app.use(cors());

const PORT = process.env.PORT || 8000;
app.use("/api/customer", require("./routes/customerRoutes"));

// Run on port
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});
