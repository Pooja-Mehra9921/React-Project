import React from "react";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../assets/images/caraousel-images/carousel-image1.jpg"
import image2 from "../../assets/images/caraousel-images/carousel-image2.jpg"
import image3 from "../../assets/images/caraousel-images/carousel-image3.jpg"
import image4 from "../../assets/images/caraousel-images/carousel-image4.jpg"
import image5 from "../../assets/images/caraousel-images/carousel-image5.jpg"
import image6 from "../../assets/images/caraousel-images/carousel-image6.jpg"
import image7 from "../../assets/images/caraousel-images/carousel-image7.jpg"

const Banner =()=>{;

    return(
        <>
       <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image5} />
                </div>
                <div>
                    <img src={image6} />
                </div>
                <div>
                    <img src={image7} />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;