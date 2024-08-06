const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const rootroute = require("./routers/rootrouter"); // Fixed path
const connectDB = require("./config/db");

dotenv.config(); // Correctly call dotenv.config()
connectDB();

const PORT = process.env.PORT || 3000; // Provide a default port if not defined
const app = express();

app.use(morgan('dev')); // Optional: Add request logging

app.get("/", (req, res) => {
    res.send("API is live");
});

app.use('/fashiontrends', rootroute);

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`.bgBlue.white);
});