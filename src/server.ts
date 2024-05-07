import express from 'express';
import { router } from './routes'

export const server = express();

server.use(express.json());
server.use(router);

const port = 3001;

server.listen(port, () => console.log(`listen in the port ${port}!!`))


