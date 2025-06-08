import Greet from "./components/Greet";
import Add from "./components/Add";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Rule from "./components/Rule";
import Expression from "./components/Expression";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import Person from "./components/Person";
import Card from "./components/Card";
const App = () => {
  return <div>
  <Person name="BROOO" age={22}/>
  <User name="RG" age={22} isMarried={false} hobbies={["coding","reading","sleeping"]}/>;
  <ProductList/>
  <UserList/>
    <Greeting/>
    <ProductInfo/>
    <List/>
    <Greet />
    <Add />
    <WelcomeMessage/>
    <Header/>
    <MainContent/>
    <Footer/>
    <Rule/>
    <Expression/>
    <Card>
         <h1>Card Component</h1>
         <p>This is a simple card component.</p>
    </Card>
  </div>;
  
  

};
const User = ({name,age,isMarried,hobbies})=>{
  return <section>
    <h1>Name:{name}</h1>
    <h2>Age : {age}</h2>
    <h3>Is married:{isMarried}</h3>
    <h4>Hobbies: {hobbies}</h4>
  </section>
}
export default App;