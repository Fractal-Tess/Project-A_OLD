import { PrismaClient } from '@prisma/client';
import { loadEnv } from '@package/config/env';

loadEnv();

export const prisma = new PrismaClient();
