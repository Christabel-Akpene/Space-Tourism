import data from "../data.json";
import { useState } from "react";
const Crew = () => {
  const [selected, setSelected] = useState(0);

  const changeCrew = (position) => {
    setSelected(position);
  };

  return (
    <div className="text-white w-full px-10 lg:px-0 lg:w-[80vw] m-auto">
      <p className="text-sm sm:mt-10 sm:text-lg lg:mt-0">
        <span className="text-gray-500 mr-4 font-bold">02</span>PICK YOUR CREW
      </p>

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-28 justify-between items-center mt-10 pb-10">
        <div className="text-center lg:text-left lg:w-[35vw]">
          <p className="text-2xl mb-8 uppercase">{data.crew[selected].role}</p>
          <p className="mb-8 text-4xl font-semi-bold sm:text-6xl">
            {data.crew[selected].name}
          </p>
          <p className="font-serif sm:w-3/4 lg:w-full m-auto ">{data.crew[selected].bio}</p>
            <div className="flex justify-center lg:justify-start space-x-6 flex-row">
              {data.crew.map((person, index) => {
                return (
                  <span
                    key={person.name}
                    onClick={() => changeCrew(index)}
                    className={`${
                      selected === index ? " bg-white" : "bg-gray-500"
                    } w-3 h-3 mt-16 rounded-full inline cursor-pointer`}
                  >
                  </span>
                );
              })}
            </div>
        </div>

        <div className="flex-1 justify-center">
          <img src={data.crew[selected].images.png}  alt={data.crew[selected].name} className="max-w-xs w-full h-auto object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Crew;
