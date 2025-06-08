import { FaCartPlus } from "react-icons/fa6";
import { useState } from "react";
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
  const [friends,setFriends] = useState(["Alex","John"]);
  const addOneFriend = () => {
    setFriends([...friends,"Rachit Gupta"]);
  }
  const removeOneFriend = () => {
    setFriends(friends.filter((f => f !== "John")));
  }
  return(<div>
    {friends.map((f)=>(
      <li key={Math.random()}>{f}</li>
    ))}
    <button onClick={addOneFriend}>Add New Friend</button>
    <button onClick={removeOneFriend}>Remove Friend</button>
    <Style/>
    <ProfileCard/>
    <IconComponent/>
  </div>
  );
}
export default App;