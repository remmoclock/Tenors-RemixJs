import React from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { Musician } from "@prisma/client";

import { db } from "../utils/db.server";

type LoaderData = { musicians: Array<Musician> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    musicians: await db.musician.findMany(),
  };
  return json(data);
};

export default function Musicians() {
  const data = useLoaderData<LoaderData>();
  return (
    <ul>
      {data.musicians.map((musician) => (
        <li key={musician.id}>{musician.name}</li>
      ))}
    </ul>
  );
}
