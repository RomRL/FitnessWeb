//Framework TO CREATE API
import express from 'express';
//Set Up Roles Between Client Server
import cors from 'cors';
//Manage DB
//  general database operations and interacting with MongoDB
import mongoose  from 'mongoose';
// specifically used for managing session data in a MongoDB database. 
import session from 'express-session';
import { config } from 'dotenv';
import {usersRouter} from './routes/users.js';
import {trainingsRouter} from './routes/trainings.js';
import {muscleRouter} from './routes/muscleInformation.js';
config();
const app = express();
const port = process.env.PORT || 5000; // Use environment variable or fallback to port 5000
// Set up session middleware
app.use(express.json());
app.use(cors());
app.use('/auth', usersRouter);
app.use('/trainings', trainingsRouter);
app.use('/muscle', muscleRouter);

const url = process.env.URL_DB;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log('Connected to MongoDB');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
