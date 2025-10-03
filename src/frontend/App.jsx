import Card from "./component/Card/Card"
import Navbar from "./component/Navbar/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <div className="display-flex flex-column align-items-center justify-items-center">
        <Card img={'https://randomwordgenerator.com/img/picture-generator/57e8d1454851af14f1dc8460962e33791c3ad6e04e507440722d72d59f48c1_640.jpg'} title={"Exploring the city's hidden gems"} author={'Sophia Clark'} views={123 + 'views'} time={'2d'}/>
      </div>
    </>
  )
}

export default App
