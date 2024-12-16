import { Textarea } from "@nextui-org/react";
import React from "react";

function StorySubject({ userSelection }: any) {
  return (
    <div>
      <label className="font-bold text-2xl text-primary">
        1. Subject of the story
      </label>
      <Textarea
        placeholder="Write the subject of the story "
        size="lg"
        classNames={{
          input: "resize-y min-h-[200px] text-xl p-5 ",
        }}
        className="mt-3 max-w-lg"
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: "storySubject",
          })
        }
      />
    </div>
  );
}

export default StorySubject;
