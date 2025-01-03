import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import Reviews from "../testimonials/Review";
import { TableOfContentsIcon } from "lucide-react"
function But(props: { text: string, link: string, func?: Function }) {
  const nav = useNavigate();
  return (
    <div className="px-1 m-2 border-2 border-yellow-800  w-fit h-auto text-[#F5DEB3] font-bold size-20 hover:bg-yellow-800 hover:text-black hover:z-10 cursor-pointer" onClick={() => {
      if (props.link != "") nav(props.link);
      if (props.func) props.func();
    }}>
      {props.text}
    </div>
  )
}
const Nav = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("/home");
  }, []);
  const [vis, setVis] = useState<Boolean>(false);
  const navMap: Array<{ name: string, link: string }> = [
    { name: "Home", link: "/home" },
    { name: "Founders", link: "/founders" },
    { name: "Contact", link: "/contact" },
    { name: "Waiting List", link: "/waiting" },
    { name: "Testimonials", link: "" },
  ]
  const [cur, setCur] = useState<{ name: string, link: string }>(navMap[0]);
  const toggler = () => {
    setVis(prev => !prev);
  }
  return (
    <>
      <Drawer>
        <div className="sm:hidden flex ">
          <button onClick={toggler}>
            <TableOfContentsIcon className="text-yellow-800"></TableOfContentsIcon>
          </button>
          <div>
            {!vis ? <But text={cur.name} link={cur.link} /> : ""}
          </div>
        </div>
        <div className="fixed top-0 left-0 right-0 z-[10]">
          {
            <div className="fixed top-1 left-0 right-0">
              <nav className=" hidden sm:flex flex-row h-auto w-full py-2 justify-center align-middle bg-[#160D04]">
                {navMap.map(e => { if (e.link != "") return (< But text={e.name} link={e.link} />); })}
                <DrawerTrigger>
                  <But text="Testimonials" link=""></But>
                </DrawerTrigger>
              </nav>
            </div>
          }
          {vis &&
            <nav className="flex flex-col sm:flex-row h-auto w-full pt-2 justify-center align-middle bg-[#160D04]">
              <button onClick={toggler}>
                <TableOfContentsIcon className="text-yellow-800"></TableOfContentsIcon>
              </button>
              {navMap.map(e => { if (e.link != "") return (< But text={e.name} link={e.link} func={() => { setCur(e); toggler(); }} />); })}
              <DrawerTrigger className="flex justify-start" onClick={toggler}>
                <But text="Testimonials" link="" ></But>
              </DrawerTrigger>
            </nav>
          }
        </div >
        <div className="h-[4vw]"></div>
        <Reviews content={
          []
        }></Reviews>
      </Drawer >
      <Outlet ></Outlet>
    </>
  )
}
export default Nav;
