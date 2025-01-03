import familyImage from "@/assets/familyWheat.jpg"
export default function Consumption(props: { desc: string }) {
  return (
    <div className="bg-[#EBAE99] w-full p-[2vw]">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start gap-[2vw]">
        <div className="flex flex-col justify-start w-full md:w-[65vw]">
          <div className="text-[5vw] font-extrabold text-black font-istok ">
            <h1>
              Why to consume
            </h1>
          </div>
          <div className="w-full bg-white/20 backdrop-blur-lg border border-white/30 font-sans rounded-md md:w-auto shadow-xl p-2 md:p-4 lg:p-6 text-[#FFFFFF] whitespace-pre-line text-sx md:text-md lg:text-lg">
            {props.desc}
          </div>
        </div>
        <div>
          <img src={familyImage}
            className="w-[50vw] md:w-[35vw] p-[0.15vw] rounded-lg h-auto shadow-black shadow-md" />
        </div>
      </div>
    </div >

  )
}
