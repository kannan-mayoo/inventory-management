// import { PrismaClient } from "@prisma/client";
// import pkg from "@prisma/client";
// const { PrismaClient } = pkg;

// const prisma = new PrismaClient();

import  prisma  from "@/lib/prisma";

async function main() {
  const demoUserId = "e7b29b89-5989-4422-a9b1-fb1f6604488d";

  // Create sample products
  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });

  console.log("Seed data created successfully!");
  console.log(`Created 25 products for user ID: ${demoUserId}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });





// import Prisma from "@prisma/client";

// const prisma = new Prisma.PrismaClient();

// async function main() {
//   const demoUserId = "e7b29b89-5989-4422-a9b1-fb1f6604488d";

//   await prisma.product.createMany({
//     data: Array.from({ length: 25 }).map((_, i) => ({
//       userId: demoUserId,
//       name: `Product ${i + 1}`,
//       price: Number((Math.random() * 90 + 10).toFixed(2)),
//       quantity: Math.floor(Math.random() * 20),
//       lowStockAt: 5,
//       createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
//     })),
//   });

//   console.log("Seeded 25 products!");
// }

// main()
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
