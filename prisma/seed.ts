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
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: "Mozart",
      instrument: `Piano`,
    },
    {
      name: "Armstrong",
      instrument: `Trompette`,
    },
    {
      name: "Santana",
      instrument: `Guitare`,
    },
    {
      name: "Ray Charles",
      instrument: `Piano`,
    },
  ];
}
