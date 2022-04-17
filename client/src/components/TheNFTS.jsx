import React from "react";

import logo from "../../images/logo.png";
import {thisArray} from "../utils/finaletherpet.json";


import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'dark' : 'dark',
  ...theme.typography.body2,
  padding: theme.spacing(2),
}));


const TheNFTS = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
   
    <div >
    <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {thisArray.map((user, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
           <span style={{color:"white"}}>{index + 1} </span> <Item><img src = {user.image} width="330"  /></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
     
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Contact-</p>
      <p className="text-white text-sm text-center font-medium mt-2">rob.w.gleason@gmail.com</p>
      <br/>
      {/* <p className="text-white text-sm text-center font-medium mt-2">Crypto Address- 0xBAd7EFcD258c1Cd4579b2f6f7631C293D53675e6</p> */}
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

   
  </div>
);

export default TheNFTS;
