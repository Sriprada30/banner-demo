"use client";

import { useState } from "react";
import Banner from "./components/Banner";
import  {CustomizationForm} from "./components/CustomizationForm";

export default function App() {
  const [bannerBg, setBannerBg] = useState("#3498db"); // Default color
  const [bannerText, setBannerText] = useState("Reading opens doors to new worlds and perspectives");
  const [textColor, setTextColor] = useState("#ffffff");
  const [icon, setIcon] = useState("book");

  return (
    <>
      <Banner bannerBg={bannerBg} bannerText={bannerText} textColor={textColor} icon={icon} />
      <CustomizationForm
        bannerBg={bannerBg}
        setBannerBg={setBannerBg}
        bannerText={bannerText}
        setBannerText={setBannerText}
        textColor={textColor}
        setTextColor={setTextColor}
        icon={icon}
        setIcon={setIcon}
      />
    </>
  );
}
