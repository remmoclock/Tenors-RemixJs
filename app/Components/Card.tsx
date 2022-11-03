import React from "react";
function Card({ joke }) {
  console.log("joke card", joke);
  return (
    <div className="flex justify-center">
      <div className="overflow-hidden text-center transition duration-200 ease-in transform rounded-lg hover:shadow-2xl hover:scale-105">
        <div id="title" className="py-5 border-b border-gray-800 ">
          <h2 className="text-3xl font-bold text-white">{joke?.name}</h2>
          <h4 className="p-2 mt-2 text-xl text-zinc">{joke?.content}</h4>
          <h3 className="p-2 mt-2 text-xl font-normal text-indigo-500">
            Instrument: {joke?.createdAt} 🎹
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
