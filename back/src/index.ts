import express from 'express';
import { createServer } from 'http';
import { routes } from './routes';

const app = express();
const server = createServer(app);

routes(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});