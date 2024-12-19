"use client";

import React, { useState } from "react";
import StorySubject from "./_component/StorySubject";
import StoryType from "./_component/StoryType";
import AgeGroup from "./_component/AgeGroup";
import ImageStyle from "./_component/ImageStyle";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}
export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();

  // used to add data to form
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData, "form");
  };

  return (
    <div className="bg-[#cad3ff] p-10 md:px-20 lg:px-40">
      <h2 className="font-bold text-[60px] text-primary text-center">
        Create Your Story
      </h2>
      <p className="text-xl text-primary text-center pt-5 ">
        Unlock your creativity with AI: Craft stories like never before! Let our
        <br />
        AI bring your imagination to life,one story at a time
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {/* story subject */}
        <StorySubject userSelection={onHandleUserSelection} />

        {/* story type */}
        <StoryType userSelection={onHandleUserSelection} />
        {/* age group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end my-10">
        <Button color="primary" className="p-6 text-xl">
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
