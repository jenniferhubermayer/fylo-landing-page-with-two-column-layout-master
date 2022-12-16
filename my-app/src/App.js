import Header from "./Components/header";
import About from "./Components/about";
import Footer from "./Components/footer";
import Signin from "./Components/signin";
import Features from "./Components/features";
import curveImage from "./images/bg-curve-desktop.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <About></About>
        <Features></Features>
        <Signin></Signin>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
