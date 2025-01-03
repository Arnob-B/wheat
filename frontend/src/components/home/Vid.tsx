import vid from "../../assets/wheatField.mp4"

const Vid = () => {
  return (
    <video className="h-full w-full  p-4 shadow-red-50" autoPlay loop>
      <source
        src={vid}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )
}
export default Vid;
