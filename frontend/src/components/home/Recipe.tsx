import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Cards(props: { heading: string, desc: string }) {
  return (
    <div className="p-2 flex flex-col justify-start bg-white/30 backdrop-blur-lg rounded-sm shadow-lg">
      <div className="text-black mb-1 text-lg font-bold">
        {props.heading}
      </div>
      <div>
        {props.desc}
      </div>
    </div>
  )
}
function Caras() {
  const map = [
    {
      heading: "heading1",
      desc: `
lsdjfasdfsadfasdkflsadflsd
alskdfjaskdfs
      `
    },
    {
      heading: "heading2",
      desc: "desc"
    },
    {
      heading: "heading2",
      desc: "desc"
    },
    {
      heading: "heading2",
      desc: "desc"
    },
    {
      heading: "heading2",
      desc: "desc"
    },
  ]
  return (
    <div>
      <Carousel className="px-2">
        <CarouselContent className="p-4">
          {map.map(e => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Cards
                  heading={e.heading}
                  desc={e.desc}
                ></Cards>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselNext className="text-[#632314]"></CarouselNext>
        <CarouselPrevious className="text-[#632314]"></CarouselPrevious>
      </Carousel>
    </div>
  )
}
export default function() {
  return (
    <div className="bg-wheatBg bg-cover w-full ">
      <div className="flex flex-col  p-[4vw]  backdrop-blur-[5px]">
        <div className="text-[5vw] text-red-400 font-istok font-bold">
          How to consume
        </div>
        <Caras></Caras>
      </div>
    </div>
  )
}
