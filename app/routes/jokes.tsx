import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Joke } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { jokes: Array<Joke> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    jokes: await db.joke.findMany(),
  };
  return json(data);
};

export default function Jokes() {
  const data = useLoaderData<LoaderData>();
  return (
    <ul>
      {data.jokes.map((joke) => (
        <li key={joke.id}>{joke.name}</li>
      ))}
    </ul>
  );
}
