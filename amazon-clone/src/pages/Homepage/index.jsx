import React, { useEffect } from "react";
import Header from "../../components/Header"
import SubHeader from "../../components/Sub-header"
import Footer from "../../components/Footer";
import "./style.css"
import FooterBasic from "../../components/FooterBasic";
import Banner from "../../components/Banner";
import ProductSuggestions from "../../components/ProductSuggestions";
import {API} from "../../configs/api.js"
import axios from "axios";

const Homepage=()=>{
useEffect(()=>{
fetchProduct();
},[])

const fetchProduct= async()=>{

const resp = await axios(API.PRODUCT_API);
console.log("api--------------------------", resp);

};


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