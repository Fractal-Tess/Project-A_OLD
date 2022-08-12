import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const connect = prisma.$connect;
export const disconnect = prisma.$disconnect;
