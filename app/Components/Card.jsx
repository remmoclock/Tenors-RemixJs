import React from "react";

function Card() {
  return (
    <div className="flex justify-center">
      <div className="overflow-hidden text-center transition duration-200 ease-in transform rounded-lg hover:shadow-2xl hover:scale-105">
        <div id="title" className="w-full py-5 border-b border-gray-800">
          <h2 className="text-3xl font-bold text-white">Mozart</h2>
          <h3 className="mt-2 text-xl font-normal text-indigo-500">Piano 🎹</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
