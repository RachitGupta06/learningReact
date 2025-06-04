import Greet from "./components/Greet";
import Add from "./components/Add";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Rule from "./components/Rule";
const App = () => {
  return <div>
    <Greet />
    <Add />
    <WelcomeMessage/>
    <Header/>
    <MainContent/>
    <Footer/>
    <Rule/>
  </div>;
};
export default App;