import React from "react";
import Header from "../../components/Header"
import SubHeader from "../../components/Sub-header"
import Footer from "../../components/Footer";
import "./style.css"
import FooterBasic from "../../components/FooterBasic";
import Banner from "../../components/Banner";

const Homepage=()=>{
return(
    <>
    
    <Header/>
    <SubHeader/>
    <Banner/>
    <Footer/>
    
    <FooterBasic/>
    </>
);
};

export default Homepage;