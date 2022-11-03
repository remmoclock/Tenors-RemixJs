import { Link, useLoaderData } from "@remix-run/react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import { db } from "../utils/db.server";
import type { LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async ({ request }) => {
  let musicians = await db.musician.findMany();
  return musicians;
};

export default function Index() {
  let data = useLoaderData();
  console.log("data", data);

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
            <Link to="/addMusician">
              <Button title="Ajouter un musicien" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {data.map((musician) => (
              <div className="m-20" key={musician.id}>
                <Card musician={musician} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
