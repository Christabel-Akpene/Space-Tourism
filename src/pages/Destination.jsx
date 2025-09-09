import { useState } from "react";
import data from "../data.json";

const Destination = () => {
  const [selected, setSelected] = useState(0);

  const changeDestination = (position) => {
    setSelected(position);
  };

  return (
    <div className="text-white w-[80vw] m-auto">
      <p className="text-lg">
        <span className="text-gray-500 mr-4 font-bold">01</span>PICK YOUR
        DESTINATION
      </p>

      <div className="flex space-x-28 justify-between items-center mt-16 pb-10">
        <div className="">
          <img src={data.destinations[selected].images.png} />
        </div>
        <div className="w-[35vw]">
            <div className="flex space-x-5 text-md mb-10">
              {
                data.destinations.map((destination, index) => {
                  return(
                  <button key={destination.name} onClick={() => changeDestination(index)} className="cursor-pointer">
                    <span className={`relative pb-2 ${selected === index ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:transition-all after:duration-300" : "after:w-0"}`}>
                        {destination.name.toUpperCase()}

                    </span>

                  </button>
                  );

                })
              }
            
          </div>

          <p className="text-7xl mb-8 uppercase">
            {data.destinations[selected].name}
          </p>
          <p className="font-serif mb-8">
            {data.destinations[selected].description}
          </p>
          <hr />

          <div className="flex justify-between mt-5">
            <div>
              <p className="text-sm">AVG. DISTANCE</p>
              <p className="text-lg uppercase font-semibold">
                {data.destinations[selected].distance}
              </p>
            </div>
            <div>
              <p className="text-sm">EST. TRAVEL TIME</p>
              <p className="text-lg uppercase font-semibold">
                {data.destinations[selected].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
