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
const App = () => {
  return <div>
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
  </div>;
};
export default App;