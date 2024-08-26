import React from "react";
import Header from "../../components/Header"
import SubHeader from "../../components/Sub-header"
import Footer from "../../components/Footer";
import "./style.css"
import FooterBasic from "../../components/FooterBasic";
import Banner from "../../components/Banner";
import ProductSuggestions from "../../components/ProductSuggestions";

const Homepage=()=>{
return(
    <>
    
    <Header/>
    <SubHeader/>
    <Banner/>
    <ProductSuggestions/>
    <Footer/>
    
    <FooterBasic/>
    </>
);
};

export default Homepage;