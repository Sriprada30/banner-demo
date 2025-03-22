export default function Banner({onClose}){
    return(
        <div className="fixed top-2 left-2 right-2 bg-sky-400 shadow-lg rounded-lg p-4 border border-gray-300">
         <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Fun Fact 🚀</h2>
            <button
            onClick={() => onClose(false)}
            className=" px-3 py-1 rounded hover:bg-red-200">❌
            </button>
        </div>
        <p className="mt-2 text-md text-white">Did you know? The fastest recorded tennis serve was 163.7 mph (263.4 km/h) by Sam Groth! 🎾⚡</p>
        </div>
        );
}
