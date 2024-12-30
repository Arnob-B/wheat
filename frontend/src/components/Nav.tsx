import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function But(props: { text: string, link: string }) {
  const nav = useNavigate();
  return (
    <div className="px-1 m-2 border-0 border-white  w-auto h-auto text-[#F5DEB3] font-bold size-20" onClick={() => {
      nav(props.link);
    }}>
      {props.text}
    </div>
  )
}
const Nav = () => {
  const [vis, setVis] = useState<Boolean>(false);
  const nav = useNavigate();
  useEffect(() => {
    nav("/home");
  }, [])
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <div className="sm:hidden">
          <button onClick={() => {
            setVis(prev => !prev);
          }}>
            clickme
          </button>
        </div>
        {
          <div className="fixed top-0 left-0 right-0">
            <nav className=" hidden sm:flex flex-row h-auto w-full py-2 justify-center align-middle bg-[#160D04]">
              <But text="Home" link="/home"></But>
              <But text="Founders" link="/founders"></But>
              <But text="Contact Us" link="/contact"></But>
              <But text="Waiting List" link="/waiting"></But>
              <But text="Testimonials" link="/reviews"></But>
            </nav>
          </div>
        }
        {vis &&
          <nav className="flex flex-col sm:flex-row h-auto w-full py-2 justify-center align-middle bg-[#160D04]">
            <But text="Home" link="/home"></But>
            <But text="Founders" link="/founders"></But>
            <But text="Contact Us" link="/contact"></But>
            <But text="Waiting List" link="/waiting"></But>
            <But text="Testimonials" link="/reviews"></But>
          </nav>
        }
      </div >
      <Outlet></Outlet>
    </>
  )
}
export default Nav;
