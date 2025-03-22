import { useState } from "react";
import WikipediaFrame from "./components/WikipediaFrame";
import Banner from "./components/Banner";

export default function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
    <WikipediaFrame  isBanner = {showBanner}/>
      {showBanner && <Banner onClose = {setShowBanner}/>}
    </>
  );
}
