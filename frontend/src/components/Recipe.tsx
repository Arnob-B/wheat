import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
function Caras() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Cards heading="heading1" desc="recipe1" />
          </CarouselItem>
          <CarouselItem>
            <Cards heading="heading2" desc="recipe2" />
          </CarouselItem>
          <CarouselItem>
            <Cards heading="heading3" desc="recipe3" />
          </CarouselItem>
          <CarouselItem>
            <Cards heading="heading4" desc="recipe4" />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext></CarouselNext>
        <CarouselPrevious></CarouselPrevious>
      </Carousel>
    </div>
  )
}
export default function() {
  return (
    <div className="bg-[#676363]  w-full p-[4vw]">
      <div className="text-[5vw] font-istok font-bold">
        How to consume
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-[2vw]">
        <div>
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/DO/PD/CZ/80513067/organic-black-wheat-seeds.jpg"
            className="w-[28vw] rounded-lg" />
        </div>
        <Caras></Caras>
      </div>
    </div>
  )
}
