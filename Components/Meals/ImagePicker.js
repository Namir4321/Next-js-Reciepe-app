"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();
  const handlePickClick = () => {
    inputRef.current.click();
  };

 const handleImageEvent=(e)=>{
const file=e.target.files[0];
if (!file) {
  setPickedImage(null);
  return;
}
const fileReader=new FileReader();
fileReader.onload =()=>{
setPickedImage(fileReader.result)
}
fileReader.readAsDataURL(file)
 }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet</p>}
            {pickedImage&&<Image src={pickedImage} 
            alt="the image selected by the user."
            fill
            />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleImageEvent}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
