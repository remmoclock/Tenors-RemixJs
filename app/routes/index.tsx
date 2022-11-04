import { Link, useLoaderData } from "@remix-run/react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import { db } from "../utils/db.server";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export let loader = async ({ request }: LoaderArgs) => {
  let musicians = await db.musician.findMany();
  return json(musicians);
};

export default function Index() {
  let data = useLoaderData<typeof loader>();

  return (
    <div className="w-full h-full p-10 text-gray-400 bg-black font-inter">
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="my-10 text-center">
            <h1 className="text-4xl font-bold text-white">Musique 🎶</h1>
            <p className="text-xl text-gray-500 text-light">
              Artistes et concerts
            </p>
          </div>
          <div id="homepage" className="p-6 m-10 text-center">
            <Link to="/musicians/new">
              <Button title="Ajouter un musicien" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {data.map((musician) => (
              <div className="gap-2 m-20 text-center" key={musician.id}>
                <Card musician={musician} />
                <Link to={`musicians/${musician.id}`}>
                  <Button title="Modifier" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
