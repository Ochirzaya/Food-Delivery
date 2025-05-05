"use client";

import { uploadImage } from "@/lib/image-upload";
import { AtomIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";

export const Imageupload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file);
  const handleOnclick = async (file?: File) => {
    if (!file) {
      console.log("File orulalgu bn");
      return;
    }
    const imageURL = await uploadImage(file);
    console.log(imageURL);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => handleOnclick(file)}>Upload</button>
    </div>
  );
};
