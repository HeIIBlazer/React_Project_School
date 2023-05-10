import express from 'express';
import db from './config/database.js';
import departmentRoute from './routes/departmentRoute.js';
import professionRoute from './routes/professionRoute.js';

import cors from 'cors';

const app = express();

try{
    await db.authenticate();
    console.log('Database Connected...');
} catch(error){
    console.log('Connection error: ', error);
}

app.use(cors());
app.use(express.json());

app.use('/department', departmentRoute);
app.use('/profession', professionRoute);

app.listen(5000, console.log('Server running on port 5000'));