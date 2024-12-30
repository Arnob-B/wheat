import wheatLogo from "./../../assets/wheatLogo.png"
export default function() {
  return (
    <div className="flex justify-start items-center m-0 p-0">
      <img src={wheatLogo} className="py-2 w-[11vw] h-[7vw] object-contain transform rotate-[-90deg] "></img>
      <div className="text-[7vw] font-bold text-[#6A401A] font-istok ">
        Black Wheat
      </div>
    </div >
  )
}
