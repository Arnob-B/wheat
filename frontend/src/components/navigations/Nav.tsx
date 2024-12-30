import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import Reviews from "../testimonials/Review";
function But(props: { text: string, link: string }) {
  const nav = useNavigate();
  return (
    <div className="px-1 m-2 border-0 border-white  w-auto h-auto text-[#F5DEB3] font-bold size-20" onClick={() => {
      if (props.link != "") nav(props.link);
    }}>
      {props.text}
    </div>
  )
}
const Nav = () => {
  const [vis, setVis] = useState<Boolean>(false);
  return (
    <>
      <Drawer>
        <div className="fixed top-0 left-0 right-0 z-[10]">
          <div className="sm:hidden fixed top-0 left-0">
            <button onClick={() => {
              setVis(prev => !prev);
            }}>
              🌽
            </button>
          </div>
          {
            <div className="fixed top-0 left-0 right-0">
              <nav className=" hidden sm:flex flex-row h-auto w-full py-2 justify-center align-middle bg-[#160D04]">
                <But text="Home" link="/home"></But>
                <But text="Founders" link="/founders"></But>
                <But text="Contact Us" link="/contact"></But>
                <But text="Waiting List" link="/waiting"></But>
                <DrawerTrigger>
                  <But text="testimonials" link=""></But>
                </DrawerTrigger>
              </nav>
            </div>
          }
          {vis &&
            <nav className="flex flex-col sm:flex-row h-auto w-full py-2 pt-4 justify-center align-middle bg-[#160D04]">
              <But text="Home" link="/home"></But>
              <But text="Founders" link="/founders"></But>
              <But text="Contact Us" link="/contact"></But>
              <But text="Waiting List" link="/waiting"></But>
              <DrawerTrigger className="flex justify-start">
                <But text="Testimonials" link=""></But>
              </DrawerTrigger>
            </nav>
          }
        </div >
        <div className="h-[4vw]"></div>
        <Outlet ></Outlet>
        <Reviews content={
          [
            { name: "arnob", comment: "hello" },
            { name: "sophia", comment: "Great work!" },
            { name: "liam", comment: "Keep it up!" },
            { name: "emma", comment: "Amazing effort!" },
            { name: "oliver", comment: "This is fantastic!" },
            { name: "ava", comment: "Well done!" },
            { name: "noah", comment: "I love this!" },
            { name: "mia", comment: "Awesome job!" },
            { name: "elijah", comment: "Incredible progress!" },
            { name: "isabella", comment: "So proud of this!" }
          ]
        }></Reviews>
      </Drawer >
    </>
  )
}
export default Nav;
