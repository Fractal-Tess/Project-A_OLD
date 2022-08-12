import path from 'node:path';
import { Router } from 'express';
import { v1ApiRouter } from './api/v1/index.js';

const router = Router();

const getPath = (path: string): string =>
  new URL(path, import.meta.url).pathname;

router.get('/', (_, res) => {
  res.sendFile(getPath('../../svelte/index.html'));
});

router.use('/online', (_, res) =>
  res.status(200).json({ message: 'API/Server is up.' }).end()
);

router.use('/api/v1', v1ApiRouter);

export { router };
