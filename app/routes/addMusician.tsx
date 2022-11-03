import React from "react";
import { Link } from "@remix-run/react";
import Button from "../Components/Button";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "../utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const instrument = form.get("instrument");
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (typeof name !== "string" || typeof instrument !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, instrument };

  const musician = await db.musician.create({ data: fields });
  return redirect(`/`);
};

function addMusician() {
  return (
    <div className="w-full h-screen p-10 text-gray-400 bg-black font-inter">
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="my-10 text-center">
            <h1 className="text-4xl font-bold text-white">
              Ajouter un musicien 🎶
            </h1>
            <p className="text-xl text-gray-500 text-light">
              Artistes et concerts
            </p>
          </div>
          <div id="homepage" className="p-6 m-10 text-center">
            <Link to="/">
              <Button title="Accueil" />
            </Link>
          </div>
          <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
              <form method="post">
                <div class="mb-5" className="block mb-3 text-base font-medium">
                  <label>
                    Nom:
                    <input
                      type="text"
                      name="name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </label>
                </div>
                <div class="mb-5" className="block mb-3 text-base font-medium">
                  <label>Instrument:</label>
                  <select
                    id="instrument"
                    name="instrument"
                    autocomplete="instrument"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>Piano</option>
                    <option>Guitare</option>
                    <option>Trompette</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="p-4 text-xl font-medium transition duration-200 ease-in-out bg-gray-900 button rounded-xl hover:shadow-lg hover:bg-indigo-600 hover:text-white"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addMusician;
