import { useState } from "react";

function But(props: { text: string }) {
  return (
    <div className="px-1 m-2 border-0 border-white  w-auto h-auto text-[#F5DEB3] font-bold size-20">
      {props.text}
    </div>
  )
}
const Nav = () => {
  const [vis, setVis] = useState<Boolean>(false);
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="sm:hidden">
        <button onClick={() => {
          setVis(prev => !prev);
        }}>
          clickme
        </button>
      </div>
      <div className="fixed top-0 left-0 right-0">
        <nav className=" hidden sm:flex flex-row h-auto w-full py-2 justify-center align-middle bg-[#160D04]">
          <But text="Home"></But>
          <But text="Founders"></But>
          <But text="Contact Us"></But>
          <But text="Waiting List"></But>
          <But text="Testimonials"></But>
        </nav>
      </div>
      {vis &&
        <nav className="flex flex-col sm:flex-row h-auto w-full py-2 justify-center align-middle bg-[#160D04]">
          <But text="Home"></But>
          <But text="Founders"></But>
          <But text="Contact Us"></But>
          <But text="Waiting List"></But>
          <But text="Testimonials"></But>
        </nav>
      }
    </div >
  )
}
export default Nav;
