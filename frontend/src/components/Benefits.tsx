function Cards(props: { heading: string, desc: string }) {
  return (
    <div className="p-2 flex flex-col justify-start bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
      <div className="text-[#4B4949] mb-1 text-lg font-bold">
        {props.heading}
      </div>
      <div>
        {props.desc}
      </div>
    </div>
  )
}
export default function(props: {
  content: Array<{
    heading: string,
    desc: string
  }>
}) {
  return (
    <div className="bg-[#676363] w-full p-[4vw]">
      <div className="text-[5vw] font-istok font-bold">
        Benefits of black wheat
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-[2vw]">
        <div>
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/DO/PD/CZ/80513067/organic-black-wheat-seeds.jpg"
            className="w-[28vw] rounded-lg" />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]">
          {
            props.content.map(e => (
              <Cards
                heading={e.heading}
                desc={e.desc}
              ></Cards>
            ))
          }
        </div>
      </div>
    </div>
  )
}
