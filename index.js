// server.js
import express from 'express';
import cors from 'cors'; // ✅ Import CORS
import MongoDb from './config/db.js';
import authRouter from './Routesfolder/authRouter.js';
import schemeRouter from './Routesfolder/SchemeRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

// ✅ Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// ✅ Connect to MongoDB
MongoDb()
  

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Hello from ES6-style Node.js server!');
});

app.use('/api/auth', authRouter);
app.use('/api/scheme', schemeRouter); // Add this line to include the scheme routes

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
