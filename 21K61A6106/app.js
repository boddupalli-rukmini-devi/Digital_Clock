const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB (replace 'your-mongodb-uri' with your MongoDB connection string)
mongoose.connect('mongodb://127.0.0.1:27017/digiclock', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for storing time in MongoDB
const timeSchema = new mongoose.Schema({
    time: String,
});

const Time = mongoose.model('Time', timeSchema);

// API endpoint to store time in MongoDB
app.post('/api/storeTime', async (req, res) => {
    const { time } = req.body;

    // Create a new Time document and save it to MongoDB
    const newTime = new Time({ time });
    await newTime.save();

    res.json({ message: 'Time stored successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
