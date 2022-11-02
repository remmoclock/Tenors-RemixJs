import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getMusicians().map((musician) => {
      return db.musician.create({ data: musician });
    })
  );
}

seed();

function getMusicians() {
  return [
    {
      name: "Mozart",
      instrument: `Piano`,
    },
    {
      name: "Louis Armstrong",
      instrument: `Trompette`,
    },
    {
      name: "Ray Charles",
      instrument: `Piano`,
    },
    {
      name: "Santana",
      instrument: `Guitare`,
    },
    {
      name: "Schubert",
      instrument: `Piano`,
    },
  ];
}
