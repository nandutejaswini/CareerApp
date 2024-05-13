// server.js
//require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
//const port = 3000;
app.use(cors());

// Connect to MongoDB


mongoose.connect("mongodb+srv://tejaswininandu11:Mehvanatej@cluster0.swubqui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
mongoose.connection.once('open', () => console.log("Connected to MongoDB successfully."));

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the routes

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(3001, () => console.log('Server running on port 3001'));