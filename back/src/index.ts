import express from 'express';
import { createServer } from 'http';
import routes from './routes/routes';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!!');
});