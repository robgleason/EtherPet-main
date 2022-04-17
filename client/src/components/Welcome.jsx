import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
  
import {thisArray} from "../utils/finaletherpet.json";
// import {thisArray} from "../utils/etherpetfive.json";

import Grid from '@mui/material/Grid';
// import Item from '@mui/material';
// import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// alert(image);

console.log(thisArray)
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  
  const handleSubmitOne = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  const handleSubmitTwo = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

   
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    
    <div className="flex w-full justify-center items-center">
     
      
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Ether Pets 
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div >
              
            </div>
   
          </div>
        </div>
        <br/>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5  ">
          <img src="https://etherpets.xyz/the_egg.gif"  />
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <p className="text-white font-semibold text-lg mt-1">
                  Mint Nft
            </p>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Average Gas Amount (ETH) - .01" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Ether Pet Name" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmitOne}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
          <br/>

          <br/>

      
      
     

        </div>
      </div>






    </div>



    
  );
};

export default Welcome;
