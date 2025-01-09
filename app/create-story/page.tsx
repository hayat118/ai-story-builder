"use client";

import React, { useState } from "react";
import StorySubject from "./_component/StorySubject";
import StoryType from "./_component/StoryType";
import AgeGroup from "./_component/AgeGroup";
import ImageStyle from "./_component/ImageStyle";
import { Button } from "@nextui-org/button";
import { chatSession } from "@/config/GeminiAi";
// @ts-ignore
import uuid4 from "uuid4";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import CustomLoader from "../_components/CustomLoader";

//
const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

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
  const [loading, setLoading] = useState(false);

  // used to add data to form
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData, "form");
  };
  //
  const GenerateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");
    // Genarate AI Story
    try {
      // console.log(FINAL_PROMPT, "fi");
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response.text());
      const response = await saveInDB(result?.response.text());
      console.log(response);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // Generate Image
  };
  // Save in DB
  const saveInDB = async (output: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          output: JSON.parse(output),
        })
        .returning({ storyId: StoryData?.storyId });
      setLoading(false);
      return result;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        <Button
          color="primary"
          className="p-6 text-xl"
          disabled={loading}
          onClick={GenerateStory}
        >
          Generate Story
        </Button>
      </div>
      <CustomLoader />
    </div>
  );
}

export default CreateStory;
