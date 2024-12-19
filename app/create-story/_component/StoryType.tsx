"use client";

import Image from "next/image";
import React, { useState } from "react";

export interface OptionField {
  label: string;
  imageUrl: string;
  isFree: boolean;
}

function StoryType({ userSelection }: any) {
  const [selectedOption, setSelectedOption] = useState<string>();

  const OptionList = [
    {
      label: "Story Book",
      imageUrl: "/story.png",
      isFree: true,
    },
    {
      label: "Bed  Story",
      imageUrl: "/bed.png",
      isFree: true,
    },
    {
      label: "Educational",
      imageUrl: "/education.png",
      isFree: true,
    },
  ];

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "storyType",
    });
  };

  return (
    <div>
      <label className="font-bold text-2xl text-primary">2.Story Type</label>
      <div className="grid grid-cols-3 gap-3 mt-3 ">
        {OptionList.map((item, index) => (
          <div
            key={item.imageUrl}
            className={`relative grayscale hover:grayscale-0 cursor-pointer  ${
              selectedOption == item.label ? "grayscale-0" : "grayscale "
            }`}
            onClick={() => onUserSelect(item)}
          >
            <h2 className="absolute bottom-3 text-white text-center w-full ">
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

export default StoryType;
