import vid from "../../assets/wheatField.mp4"

const Vid = () => {
  return (
    <video className="h-full w-full shadow-red-50" autoPlay loop muted>
      <source
        src={vid}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )
}
export default Vid;
