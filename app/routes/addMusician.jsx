import { Link } from "@remix-run/react";
import Button from "~/Components/Button";
import Card from "~/Components/Card";

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
          <Card />
        </div>
      </div>
    </div>
  );
}

export default addMusician;
