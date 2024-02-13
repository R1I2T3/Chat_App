import { useState } from "react";
import toast from "react-hot-toast";
const usePreview = () => {
  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Invalid file type");
    }
  };
  return { handleImageChange, imageUrl, setImageUrl };
};

export default usePreview;
