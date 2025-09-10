import data from "../data.json";
import { useState } from "react";

const Technology = () => {
  const [selected, setSelected] = useState(0);

  const changeTechnology = (position) => {
    setSelected(position);
  };

  return (
    <div className="text-white ml-32">
      <p className="text-lg ">
        <span className="text-gray-500 mr-4 font-bold">03</span>SPACE LAUNCH 101
      </p>

      <div className="flex justify-between items-center space-x-10 pb-20">
        <div className="flex flex-col">
              {data.technology.map((technology, index) => {
                return (
                  <button
                    key={technology.role}
                    onClick={() => changeTechnology(index)}
                    className={`${
                      selected === index ? " bg-white text-black" : "border border-white"
                    } w-14 h-14 text-2xl text-bold mt-8 flex items-center justify-center text-center rounded-full cursor-pointer`}
                  >
                    
                    {index + 1}
                  </button>
                );
              })}
        </div>

        <div className="w-2/6"> 
          <p className="text-2xl mb-5 text-gray-500">THE TERMINOLOGY...</p>
          <p className="mb-8 text-4xl font-semi-bold">
            {data.technology[selected].name}
          </p>
          <p className="font-serif ">{data.technology[selected].description}</p>
        </div>

        <div className="">
          <img src={data.technology[selected].images.portrait}   className="max-w-md w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
};

export default Technology;
