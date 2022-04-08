import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import FixedBottomNavigation from "./FixedBottomNavigation";
import ContactUs from "./ContactUs";
import './home.css'
import Calculator  from "./Calculator";
import Converter from "./Converter";
const Home=()=>{
    return(
        <div className="home">
          <ResponsiveAppBar></ResponsiveAppBar>
          <Calculator></Calculator>
          <Converter></Converter>
          <ContactUs></ContactUs>
        </div>
    )
}
export default Home;
