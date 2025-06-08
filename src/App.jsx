import { FaCartPlus } from "react-icons/fa6";

import Style from "./components/Style";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
const handleCheck = () =>console.log(Math.round(Math.random()*10));
const Botton =()=>{
  return( 
    <button onClick={handleCheck}>Click</button>
  )
}
const App = () => {
  return( <div>
    <Style/>
    <ProfileCard/>
    <IconComponent/>
    <Botton/>
  </div>
  )
}
export default App;