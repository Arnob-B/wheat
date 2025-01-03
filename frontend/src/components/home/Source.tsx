import farmerImage from "@/assets/farmer.jpg"
export default function(props: { desc: string }) {
  return (
    <div className="bg-[#403B15] w-full p-[2vw]">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start [gap-0.5vw] md:gap-[2vw]">
        <div className="flex flex-col justify-start w-auto md:w-[65vw]">
          <div className="text-2xl md:text-[3.5vw] font-istok font-bold mt-[2.3vw] mb-4">
            Sourced Directly From Farmers
          </div>
          <div className="text-sm md:text-md bg-white/20 backdrop-blur-lg border border-white/30 font-sans rounded-md w-auto shadow-xl p-2 md:p-4 lg:p-6 text-white whitespace-pre-line">
            {props.desc}
          </div>
        </div>
        <div>
          <img src={farmerImage}
            className="w-[60vw] md:w-[35vw] rounded-lg h-auto shadow-black shadow-md" />
        </div>
      </div>
    </div>

  )
}
