const Member = (props: { img: string, name: string, desc: string }) => {
  return (
    <div className="flex flex-col sm:flex-row p-4 m-4 border-white border-2">
      <img src={props.img} className=" rounded-lg shadow-white shadow-md size-[22vw] "></img>
      <div className="flex justify-center">
      </div>
      <div className="flex flex-col m-3">
        <div className="text-White text-[3vw] font-istok font-extrabold">{props.name}</div>
        <div className="text-White text-[1.5vw] font-istok whitespace-pre-line">{props.desc}</div>
      </div>
    </div>
  )
}
export default function Founders() {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        <div className="font-istok text-[7vw] align-text-bottom font-extrabold text-black font-outline-4">
          Founders
        </div>
        <div className="font-sans text-[1.5vw]">
          Great things are never done by one person. They're done by a team of people
        </div>
      </div>
      <div className="mt-[4vw]">
        <Member img={"https://media.licdn.com/dms/image/v2/D5603AQFOSpU0qveh_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682804029649?e=2147483647&v=beta&t=pfsmWc00K0UfnMAr53SWsdjGMmPoTS0lyrSDstr66qI"} name="Anurag Pandey" desc={"Founder at Amuzo | Ex Founder at Fintech | Ex Software Engineer at Amazon"}></Member>
        <Member img={"https://media.licdn.com/dms/image/v2/D5603AQETrupqR0zu8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713786635778?e=2147483647&v=beta&t=rQhpT9Hz_0SvfFGljNsWcxEugYAIQtDuz9aJxrCNTw8"} name="Pravin Agarwal" desc={"Seniors Accounts Executive at Manyavar & Mohey"}></Member>
      </div>
    </div >
  )
}
