import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./style.css";
const FooterBasic = () => {
  return (
<>
    <Box className="main-container">
      <Box className="items-container">
<Typography className="footer-menu" variant="body1">Conditions of Use</Typography>
<Typography className="footer-menu" variant="body1">Police Notice</Typography>
<Typography className="footer-menu" variant="body1">Help</Typography>
<Box>
  <Typography variant="body1">
  © 1996-2024, Amazon.com, Inc. or its affiliates
  </Typography>
</Box>
      </Box>


    </Box>
    
      </>
  );
};
export default FooterBasic;
