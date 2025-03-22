import Banner from "./Banner";
import { useState } from "react";


export default function WikipediaFrame() {

    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div  className="w-full p-4">
                {showBanner && <Banner onClose={setShowBanner} />}
            </div>
        </div>
    );
}

