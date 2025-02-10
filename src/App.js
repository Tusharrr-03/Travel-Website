import logo from './logo.svg';
import './App.css';
import Form from './HomePageComponents/Form';
import NavBarSec from './HomePageComponents/NavBarSec';
import Dat from "./HomePageComponents/Dat";
import Tour from "./HomePageComponents/Tour";
import Plans from "./HomePageComponents/Plans";
import Slides from "./HomePageComponents/Slides";
import Certificate from "./HomePageComponents/Certificate";
import Hovers from "./HomePageComponents/Hovers";
import Slider from "./HomePageComponents/Slider";
import Slider2 from "./HomePageComponents/Slider2";
import Slider3 from "./HomePageComponents/Slider3";
import Bottom1 from "./HomePageComponents/Bottom1";
import Bottomfinal from "./HomePageComponents/Bottomfinal";
// import Adminpanel from "./HomePageComponents/Dashboard/Adminpanel";
// import Customer from "./HomePageComponents/Dashboard/Customer";
// import FormHandling from "./HomePageComponents/Dashboard/FormHandling";

function App() {
  return (
    <>
      <NavBarSec />
      <Form />
       <Dat />
      <Tour />
      <Plans />
      <Slides />
      <Certificate />
      <Hovers />
      <Slider />
      <Slider2 />
      <Slider3 />
      <Bottom1 />
      <Bottomfinal />
      {/* <Adminpanel />
      <Customer />
      <FormHandling /> */}
    </>
  );
}

export default App;
