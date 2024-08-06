import React from "react";
import { Box, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
// import Divider from "@mui/material";
// import Typography from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import TextField from "@mui/material/TextField";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


import { amber } from "@mui/material/colors";
import AmazonLogo from "../../assets/images/amazon.png"

import "./style.css";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import theme from "../../../theme";

const LoginPage = () => {
  const navigate = useNavigate();
  // const DemoPaper = styled(Paper)(({ theme }) => ({
  //   width: 380,
  //   height: 340,

  //   padding: theme.spacing(2),
  //   ...theme.typography.body2,
  //   textAlign: "center",
  // }));
  const HandleYourCreateAccount = () => {
    // console.log("handleyourcreat");
    navigate("/signup");
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Grid className="main-conatiner" container spacing={2}>
    
      <Grid style={{ display:"flex", alignItem:"center", justifyContent:"center"}} xs={6} md={8}>
          
          <Box style={{ width:"420px"}}>
          <Box style={{width:"420px"}} className="logo">
            <img src={AmazonLogo} alt="AmazonLogo" height={40} width={"120"} />
          </Box>
            <Box>
              <Paper elevation={2} sx={{ height: "350px", width: "420px" }}>
                <Typography sx={{ paddingLeft: "20px", paddingTop:"20px" }} variant="body1" style={{fontSize:"20px"}}>
                  {" "}
                  Sign in or create account
                </Typography>
                <Typography variant="body1" sx={{ paddingLeft: "20px", paddingTop:"10px", fontSize:"14px"}}>
                  <strong>Enter Mobile Number or Email</strong>
                </Typography>
                <TextField
          error={false}
          id="outlined-error-helper-text"
          label="Error"
          helperText="Incorrect entry."
          variant="outlined"
          size="small"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
              <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      <TextField
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            inputProps={{
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
           
            label="Password"
          />

                <Box>
                  <Button
                    variant="body1"
                    sx={{
                      background: amber[300],
                      margin: "20px 0 10px 20px",
                      width: "380px",
                      color: "black",
                      borderRadius:"50px"
                    }}
                  >
                    {" "}
                    Continue
                  </Button>
                </Box>
                <Typography style={{ lineHeight:"10px"}}  component="span" sx={{ margin: "0 0 0 20px", fontSize:"14px", textAlign:"justify" }}>
                  By continuing, you agree to Amazon's{" "}
                  <Link href="#" variant="condition">conditions of
                  Use
                  </Link>
                  <Typography component="span"> and </Typography>
                  <Link href="#" variant="privacy" style={{paddingLeft:"20px"}}>
                    {"Privacy Notice."}
                  </Link>

                </Typography>
        
                <Typography
                  component="span"
                  sx={{ display: "flex", margin: "auto" }}
                >
                  <ArrowRightIcon style={{paddingLeft:"10px", marginTop:"10px"}} />
                  <Link href="#" variant="Need help" style={{marginTop:"10px"}}>
                    {"Need help?"}
                  </Link>
                </Typography>
                <Divider sx={{ margin: "15px 0 0 20px", width: "380px" }} />
                <Box className="work">Buying for work?</Box>
                <Box className="shop-link">
                  <Link href="#" variant="privacy">
                    {"Shop on Amazon Business"}
                  </Link>
                </Box>
                {/* </DemoPaper>
            </Stack> */}
              </Paper>
            </Box>
            <Divider
              sx={{ margin: "10px 0 0 15px", fontSize: "15px", width: "380px" }}
            >
              New to Amazon?
            </Divider>
            <Button
              variant="text"
              sx={{
                margin: "20px 0 0 15px",
                width: "380px",
                background: "none",
                // background: amber[400],
                color: "black",
                // backgroundColor: theme.palette.amber.main,
                border: "1px solid rgb(211,211,211)",
              }}
              onClick={HandleYourCreateAccount}
            >
              Create your Amazon Account
            </Button>
          </Box>
        
      </Grid>
    </Grid>
  );
};
export default LoginPage;
