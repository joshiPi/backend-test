import express, {Express} from 'express';
import dotenv from 'dotenv'
import projectRouter from './routes/projectRoutes';
import { connectDB } from './services/db.service';
dotenv.config();

const app: Express = express();

try {
  connectDB(process.env.MONGODB_URI)
  console.log("connected")
} catch (err) {
  console.log('could not connect')
}

app.use('/projectData', projectRouter)

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running`);
});