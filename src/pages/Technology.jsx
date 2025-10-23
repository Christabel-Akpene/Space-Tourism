import data from "../data.json";
import { useState } from "react";

const Technology = () => {
  const [selected, setSelected] = useState(0);

  const changeTechnology = (position) => {
    setSelected(position);
  };

  return (
    <div className="text-white lg:ml-32">
      <p className="text-sm text-center sm:text-left sm:ml-8 lg:ml-0 sm:mt-10 sm:text-lg mb-18 lg:mb-0 lg:mt-0">
        <span className="text-gray-500 mr-4 font-bold">03</span>SPACE LAUNCH 101
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center space-x-10 pb-20">
        <div className="flex m-auto lg:m-0  lg:flex-col space-x-5 my-10 lg:my-0 order-2 lg:order-1">
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

        <div className="w-full m-auto px-10 text-center lg:text-left lg:w-2/6 order-3 lg:order-2"> 
          <p className="text-2xl mb-5 text-gray-500">THE TERMINOLOGY...</p>
          <p className="mb-8 text-4xl font-semi-bold">
            {data.technology[selected].name}
          </p>
          <p className="font-serif lg:w-full">{data.technology[selected].description}</p>
        </div>

        <div className="order-1 lg:order-3">
          <picture>
            <source srcset={data.technology[selected].images.portrait} media="(min-width:1024px)" />
            <img src={data.technology[selected].images.landscape} alt={data.technology[selected].name}  className="w-full h-auto object-contain lg:max-w-md "  />
          </picture>
        </div>

      </div>
    </div>
  );
};

export default Technology;
