import { Card, CardTitle, CardFooter, CardHeader, CardContent, CardDescription } from "@/components/ui/card"
import { DrawerClose, DrawerTitle, DrawerHeader, DrawerFooter, DrawerContent, } from "@/components/ui/drawer"
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CircleX } from "lucide-react"
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
            {
              props.content.map(e => (
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card>
                    <CardHeader>
                      <CardTitle>{e.name}</CardTitle>
                    </CardHeader>
                    <CardDescription>
                      <CardContent>
                        {e.comment}
                      </CardContent>
                    </CardDescription>
                  </Card>
                </CarouselItem>
              )
              )
            }
          </CarouselContent>
        </Carousel>
      </DrawerContent>
    </div>
  )

}
