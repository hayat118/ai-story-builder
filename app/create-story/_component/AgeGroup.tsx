import Image from "next/image";
import React, { useState } from "react";

function AgeGroup() {
  const [selectedOption, setSelectedOption] = useState<string>();

  const OptionList = [
    {
      label: "0-2 Years",
      imageUrl: "/02.png",
      isFree: true,
    },
    {
      label: "3-5 Years",
      imageUrl: "/35.png",
      isFree: true,
    },
    {
      label: "6-8 Years",
      imageUrl: "/68.png",
      isFree: true,
    },
  ];

  return (
    <div>
      <label className="font-bold text-2xl text-primary">3.Age Group</label>
      <div className="grid grid-cols-3 gap-3 mt-3 ">
        {OptionList.map((item, index) => (
          <div
            key={item.imageUrl}
            className={`relative grayscale hover:grayscale-0 cursor-pointer  ${
              selectedOption == item.label ? "grayscale-0" : "grayscale "
            }`}
            onClick={() => setSelectedOption(item.label)}
          >
            <h2 className="absolute top-3 text-white text-center w-full ">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={200}
              height={300}
              className="object-cover h-[200px] rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroup;
