const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/user_registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a MongoDB schema and model for user data
const userSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Create a route to handle registration form submissions
app.post('/api/register', async (req, res) => {
  try {
    // Extract registration data from the request
    const { name, dateOfBirth, email, password } = req.body;

    // Create a new user document
    const newUser = new User({ name, dateOfBirth, email, password });

    // Save the user data to the database
    await newUser.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
