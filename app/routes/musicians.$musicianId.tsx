import React from "react";
import { Link, useLoaderData, useLocation, Form } from "@remix-run/react";
import Button from "../Components/Button";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { db } from "../utils/db.server";

async function getMusicianById(musicianId: string) {
  return await db.musician.findUnique({
    where: {
      id: musicianId,
    },
  });
}
export let loader = async ({ params }: LoaderArgs) => {
  const musicianId = params.musicianId;

  if (!musicianId) {
    throw new Error("Please add a correct id");
  }
  const isNew = musicianId === "new";
  let musician: Awaited<ReturnType<typeof getMusicianById>> = {
    createdAt: new Date(),
    id: "",
    instrument: "",
    name: "",
    updatedAt: new Date(),
  };
  if (isNew) {
    return json({ musician });
  }

  musician = await getMusicianById(musicianId);
  return json({ musician });
};

type ActionForm = {
  name?: string;
  instrument?: string;
};

export const action = async ({ request, params }: ActionArgs) => {
  const musicianId = params.musicianId;

  if (!musicianId) {
    throw new Error("Please add a correct id");
  }
  const isNew = musicianId === "new";

  const formData = await request.formData();
  const data: ActionForm = Object.fromEntries(formData);
  const { instrument, name } = data;
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (typeof name !== "string" || typeof instrument !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, instrument };

  if (isNew) {
    const musician = await db.musician.create({ data: fields });
    return redirect(`/`);
  } else {
    const musician = await db.musician.update({
      where: {
        id: musicianId,
      },
      data: fields,
    });
    return redirect(`/`);
  }
};

function MusicianPage() {
  const { musician } = useLoaderData<typeof loader>();
  const pathname = useLocation().pathname;
  const isNew = pathname === "/musicians/new";
  return (
    <div className="w-full h-screen p-10 text-gray-400 bg-black font-inter">
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="my-10 text-center">
            <h1 className="text-4xl font-bold text-white">
              {isNew ? "Ajouter" : "Modifier"} un musicien 🎶
            </h1>
            {isNew ? (
              <p className="text-xl text-gray-500 text-light">
                Artistes et concerts
              </p>
            ) : null}
          </div>
          <div id="homepage" className="p-6 m-10 text-center">
            <Link to="/">
              <Button title="Accueil" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <Form method="post">
                <div className="block mb-3 text-base font-medium">
                  <label>
                    Nom :
                    <input
                      type="text"
                      name="name"
                      defaultValue={musician?.name}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </label>
                </div>
                <div className="block mb-3 text-base font-medium">
                  <label>Instrument :</label>
                  <select
                    id="instrument"
                    name="instrument"
                    autocomplete="instrument"
                    defaultValue={musician?.instrument}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="Piano">Piano</option>
                    <option value="Guitare">Guitare</option>
                    <option value="Trompette">Trompette</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="p-4 text-xl font-medium transition duration-200 ease-in-out bg-gray-900 button rounded-xl hover:shadow-lg hover:bg-indigo-600 hover:text-white"
                  >
                    Valider
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicianPage;
