import NavBar from "./components/NavBar";
import {Outlet} from 'react-router-dom'
import Banner from "./components/Banner";
import Info2 from "./components/Info2";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Gestoria from "./components/Gestoria";
import Cars from "./components/Cars";



function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Info2/>
      <Info/>
      <Cars/>
      <Gestoria/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
