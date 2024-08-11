const mongoose = require("mongoose");

const connectionDb = async () => {
    try {
        await mongoose.connect(process.env.db_url);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};

module.exports = connectionDb;

