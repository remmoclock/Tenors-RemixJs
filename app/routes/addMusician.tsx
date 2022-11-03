import React from "react";
import { Link } from "@remix-run/react";
import Button from "../Components/Button";

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
          <div>
            <p>Add your own hilarious joke</p>
            <form method="post">
              <div>
                <label>
                  Name: <input type="text" name="name" />
                </label>
              </div>
              <div>
                <label>
                  Content: <textarea name="content" />
                </label>
              </div>
              <div>
                <select
                  id="instrument"
                  name="instrument"
                  autocomplete="instrument"
                  className="px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Piano</option>
                  <option>Guitare</option>
                  <option>Trompette</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addMusician;
