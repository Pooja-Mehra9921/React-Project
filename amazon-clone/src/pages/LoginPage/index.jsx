import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import  IconButton from "@mui/material/IconButton"
import  InputAdornment from "@mui/material/InputAdornment"
import  TextField from "@mui/material/TextField"
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { amber } from "@mui/material/colors";
import AmazonLogo from "../../assets/images/amazon.png"
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Visibility,  VisibilityOffOutlined } from "@mui/icons-material";
import { Chip } from "@mui/material";


const LoginPage = () => {
  const navigate = useNavigate();

  const HandleYourCreateAccount = () => {
    // console.log("handleyourcreat");
    navigate("/signup");
  };


  const [showPassword, setShowPassword] = React.useState(false);
  const [loginData, setloginData] = useState({email:"", password:""});
  const [isSubmit, setisSubmit] = useState(false)

const handlepassword =()=>{
console.log("password clicked");
setShowPassword(!showPassword);
};

const handleLogin =()=>{
  console.log("login button");
  setisSubmit(true);
};


const handleChange = (type) => (event) =>{
  // setisSubmit(false);
console.log("type", type);
  // if(type=="email"){
  //   setloginData({...loginData, email: event.target.value})
  // }
  // else if(type=="password"){
  //   setloginData({...loginData, password: event.target.value})

  // }
  setloginData({...loginData, [type]: event.target.value})

}
const emailErr =  isSubmit && loginData?.email.length <=5;
const passErr =  isSubmit && loginData?.password.length <=6;

console.log("login data", loginData);







  return (
    <Grid container className="main-conatiner" spacing={2}>
      <Grid style={{ display:"flex", alignItem:"center", justifyContent:"center"}} xs={6} md={8}>
          
          <Box style={{ width:"420px"}}>
          <Box style={{width:"420px"}} className="logo">
            <img src={AmazonLogo} alt="AmazonLogo" height={40} width={"120"} />
          </Box>
            <Box>
              <Paper elevation={2} sx={{ height: "350px", width: "420px" }}>
                <Typography sx={{ paddingLeft: "20px", paddingTop:"20px" }} variant="body1" style={{fontSize:"20px"}}>
                 
                  Sign in or create account
                </Typography>


                <Typography variant="body1">Enter Email</Typography>
                <TextField style={{width:"90%", marginLeft:"20px", marginRight:"20px"}}
                 
                 id="outlined-error-helper-text"
                  label="Email"
                 variant="outlined"
                  size="small"
                 margin="normal"
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="start">
               <EmailOutlinedIcon  style={{color: emailErr ? "red" : "grey" }}/>
               </InputAdornment>
               ),
                }}
onChange={handleChange("email")}
                error={emailErr}
                helperText= {emailErr && "please enter valid email."}
              />

          <TextField style={{width:"90%", marginLeft:"20px", marginRight:"20px"}}
          
          id="outlined-error-helper-text"
          label="Password"
          type={showPassword ? "text" :  "password"}
        
          variant="outlined"
          fullWidth
          size="small"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handlepassword}>
                  {showPassword
                    ?
                    <Visibility style={{color: passErr ? "red" : "grey" }}/>
                    : 
                     <VisibilityOffOutlined style={{color: passErr ? "red" : "grey" }} />
                  }
                </IconButton>
           
              </InputAdornment>
            ),
          }}
          onChange={handleChange("password")}
          error={passErr}
          helperText= {passErr && "please enter valid password."}
        />


<Chip style={{width:"90%", margin:"10px 20px", background: amber[300]}} label="Continue" variant="contained" onClick={handleLogin} /> 
















{/* 
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
                </Box> */}
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
