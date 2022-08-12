import express from 'express';
import cors from 'cors';
import { router } from '$router';
import { EXPRESS_PORT } from '$env';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(+EXPRESS_PORT, '0.0.0.0', () => {
  console.log(`Api server listening on port ${EXPRESS_PORT}`);
});
