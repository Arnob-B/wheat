import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Cards(props: { heading: string, desc: string, img: string }) {
  return (
    <div className="p-2 flex flex-col justify-start bg-white/30 backdrop-blur-lg rounded-sm shadow-lg">
      <div className="flex justify-center mb-2">
        <img src={props.img} className="w-40 h-40 rounded-md"></img>
      </div>
      <div className="m-2">
        <div className="text-black mb-1 text-lg font-bold">
          {props.heading}
        </div>
        <div>
          {props.desc}
        </div>
      </div>
    </div>
  )
}
function Caras(props: {
  recipes: Array<
    { heading: string, desc: string, img: string }
  >
}) {
  return (
    <div>
      <Carousel className="px-2">
        <CarouselContent className="p-4">
          {props.recipes.map(e => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Cards
                  heading={e.heading}
                  desc={e.desc}
                  img={e.img}
                ></Cards>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselNext className="text-[#632314]"></CarouselNext>
        <CarouselPrevious className="text-[#632314]"></CarouselPrevious>
      </Carousel>
    </div >
  )
}
export default function(props: {
  recipes: Array<
    { heading: string, desc: string, img: string }
  >
}) {
  return (
    <div className="bg-wheatBg bg-cover w-full ">
      <div className="flex flex-col  p-[4vw]  backdrop-blur-[5px]">
        <div className="text-[5vw] text-red-400 font-istok font-bold">
          How to consume
        </div>
        <Caras recipes={props.recipes}></Caras>
      </div>
    </div>
  )
}
