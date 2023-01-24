import express from 'express';
import router from './router';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { protect } from './modules/auth';

dotenv.config()

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api', protect, router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
