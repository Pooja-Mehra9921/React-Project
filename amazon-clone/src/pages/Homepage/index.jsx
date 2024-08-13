import React from "react";
import Header from "../../components/Header"
import SubHeader from "../../components/Sub-header"
import Footer from "../../components/Footer";
import "./style.css"
import FooterBasic from "../../components/FooterBasic";

const Homepage=()=>{
return(
    <>
    <Header/>
    <SubHeader/>
    <Footer/>
    
    <FooterBasic/>
    </>
);
};

export default Homepage;