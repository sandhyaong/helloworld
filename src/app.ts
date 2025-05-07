import express from 'express';
import userRoutes from './routes/user.routes';
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
// Error handler
// app.use(errorMiddleware);

export default app;
