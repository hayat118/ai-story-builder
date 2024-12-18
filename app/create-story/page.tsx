"use client";

import React from "react";
import StorySubject from "./_component/StorySubject";
import StoryType from "./_component/StoryType";
import AgeGroup from "./_component/AgeGroup";
import ImageStyle from "./_component/ImageStyle";

export interface fieldData {
  fieldName: String;
  fieldValue: String;
}

function CreateStory() {
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data, "abbbb");
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
        <StoryType />
        {/* age group */}
        <AgeGroup />
        {/* Image style */}
        <ImageStyle />
      </div>
    </div>
  );
}

export default CreateStory;
