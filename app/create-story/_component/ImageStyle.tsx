import Image from "next/image";
import React, { useState } from "react";
import { OptionField } from "./StoryType";

function ImageStyle({ userSelection }: any) {
  const [selectedOption, setSelectedOption] = useState<string>();

  const OptionList = [
    {
      label: "3D Cartton",
      imageUrl: "/3d.png",
      isFree: true,
    },
    {
      label: "Paper Cut",
      imageUrl: "/papercut.png",
      isFree: true,
    },
    {
      label: "Water Color",
      imageUrl: "/watercolor.png",
      isFree: true,
    },
    {
      label: "Pixel Style",
      imageUrl: "/pixel.png",
      isFree: true,
    },
  ];
  //
  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "imageStyle",
    });
  };
  //

  return (
    <div>
      <label className="font-bold text-2xl text-primary">4.Image Style</label>
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
              width={150}
              height={300}
              className="object-cover h-[100px] rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageStyle;
