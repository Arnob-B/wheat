import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card"
import { DrawerClose, DrawerTitle, DrawerHeader, DrawerContent, } from "@/components/ui/drawer"
import { Carousel, CarouselItem, CarouselContent, } from "@/components/ui/carousel"
import { CircleX } from "lucide-react"
const Cards = (props: {
  name: string,
  comment: string
}) => {
  return (
    < CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4" >
      <Card>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
        </CardHeader>
        <CardDescription>
          <CardContent>
            {props.comment}
          </CardContent>
        </CardDescription>
      </Card>
    </CarouselItem >
  )
}
export default function Reviews(props: {
  content: Array<{
    name: string
    comment: string
  }>
}) {
  return (
    <div className="mt-3">
      <DrawerContent>
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="font-istok font-extrabold text-[3.5vw]">
            Reviews
          </DrawerTitle>
          <DrawerClose>
            <CircleX />
          </DrawerClose>
        </DrawerHeader>
        <Carousel>
          <CarouselContent className="p-[4vw]">
            <div className="font-istok font-extrabold text-[2.5vw]">
              Comming Soon...
            </div>
            {props.content.map(e => { return (<Cards name={e.name} comment={e.comment} />) })}
          </CarouselContent>
        </Carousel>
      </DrawerContent>
    </div >
  )

}
