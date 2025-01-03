import wheatLogo from "./../../assets/wheatLogo.png"
export default function() {
  return (
    <div className="flex justify-start items-center mt-[5vw] p-0">
      <img src={wheatLogo} className="py-2 w-[11vw] h-[7vw] object-contain transform rotate-[-90deg] "></img>
      {/*
      <div className="text-[5vw] font-bold text-[#6A401A] font-istok ">
        Desi Dhaan presents Black Wheat
      </div>
      */}
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-6xl font-extrabold leading-none tracking-tight  text-yellow-600">Desi Dhaan <span className="text-white">presents</span> <div className="text-[#6A401A]">Black Wheat</div></h1>
    </div >
  )
}
