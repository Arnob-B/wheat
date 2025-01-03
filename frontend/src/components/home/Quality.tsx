import qualityImage from "@/assets/quality.jpg"
export default function Quality(props: { desc: string }) {
  return (
    <div className="bg-[#9B9DA9] w-full p-[2vw] flex flex-col items-center">
      <div className="text-[5vw] font-extrabold text-black font-istok ">
        <h1>
          Quality Assured
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-[2vw]">
        <div>
          <img src={qualityImage}
            className="w-[50vw] h-[40vw] md:h-auto md:w-[35vw] p-[0.15vw] rounded-lg  shadow-black shadow-md object-cover" />
        </div>
        <div className="flex flex-col justify-start w-full md:w-[65vw]">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 font-sans rounded-md w-auto text-sm md:text-lg shadow-xl p-2 md:p-6 text-white">
            {props.desc}
          </div>
        </div>
      </div>
    </div >

  )
}
