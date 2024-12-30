//import './App.css'

import Benefits from "./components/Benefits"
import Header1 from "./components/Header1"
import Nav from "./components/Nav"
import Recipe from "./components/Recipe"
import Source from "./components/Source"
import Vid from "./components/Vid"

function App() {
  return (
    <>
      <Nav>
      </Nav>
      <Header1></Header1>
      <Vid></Vid>
      <Benefits content={[
        {
          heading: "hello",
          desc: "mix two cups of sugar"
        },
        {
          heading: "hello",
          desc: "mix two cups of sugar"
        },
        {
          heading: "hello",
          desc: "mix two cups of sugar"
        },
        {
          heading: "hello",
          desc: "mix two cups of sugar"
        },
      ]}></Benefits >
      <Source desc={`
 If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.\n

      While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs        
   `}></Source >
      <Recipe></Recipe>
    </>
  )
}

export default App
