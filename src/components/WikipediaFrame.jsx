export default function WikipediaFrame({isBanner}){
    return(
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Wikipedia iframe always visible */}
      <div className={`w-full h-screen overflow-hidden ${isBanner ? "mt-30" : "mt-0"}`}>
        <iframe
          src="https://en.wikipedia.org/wiki/Main_Page"
          className="w-full h-full"
          title="Wikipedia"
        ></iframe>
      </div>
    </div>
      );
}

