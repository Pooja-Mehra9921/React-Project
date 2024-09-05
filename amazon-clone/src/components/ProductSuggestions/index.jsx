import  Box  from "@mui/material/Box";
import React from "react";
import "./style.css"
import { Typography } from "@mui/material";
import dummy_image from "../../assets/images/DummyProduct.png"


const ProductSuggestions =()=>{
    return(
        <>
        <Box className="suggestion-main-container">
<Box className="suggestion-container">
<Box className="title-section">
    <Typography variant="h5">title</Typography>
</Box>
<Box className="images-section">
    <img className="product-images" src={dummy_image} alt="images" />
</Box>
</Box>
        </Box>
        </>
    );
};

export default ProductSuggestions;