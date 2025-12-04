// import pkg from "@prisma/client";

// const PrismaClient = (pkg as any).PrismaClient;

// const globalForPrisma = globalThis as unknown as {
//   prisma: InstanceType<typeof PrismaClient> | undefined;
// };

// export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;



import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

