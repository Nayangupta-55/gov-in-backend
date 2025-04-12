// server.js
import express from 'express';
import MongoDb from './config/db.js'; // Import the MongoDb function from db.js
import mongoose from 'mongoose';
const app = express();

const PORT = 3000;

MongoDb(); // Call the MongoDb function to connect to the database                                                             

app.get('/', (req, res) => {
  res.send('Hello from ES6-style Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
