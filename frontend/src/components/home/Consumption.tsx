export default function Consumption(props: { desc: string }) {
  return (
    <div className="bg-[#EBAE99] w-full p-[2vw]">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start gap-[2vw]">
        <div className="flex flex-col justify-start w-[65vw]">
          <div className="text-[5vw] font-extrabold text-black font-istok ">
            <h1>
              Why to consume
            </h1>
          </div>
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 font-sans rounded-md w-auto shadow-xl p-6 text-[#FFFFFF] whitespace-pre-line">
            {props.desc}
          </div>
        </div>
        <div>
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/DO/PD/CZ/80513067/organic-black-wheat-seeds.jpg"
            className="w-[35vw] p-[0.15vw] rounded-lg h-auto shadow-black shadow-md" />
        </div>
      </div>
    </div >

  )
}
