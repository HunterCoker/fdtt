import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleFileChange = () => {
    // const files = Array.from(event.target.files);
    // setImages((prev) => prev.map((file) => URL.createObjectURL(file)));
  };

  return (
    <Card>
      <CardBody>
        <h1>Hello</h1>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
      </CardBody>
    </Card>
    // <label htmlFor=""></label>
    // <input
    //   type="file"
    //   multiple
    //   accept="image/*"
    //   onChange={handleFileChange}
    //   // style={{ display: "none" }}
    // >
    //   <h1>Select Images</h1>
    // </input>
  );
}

export default ImageUploader;
