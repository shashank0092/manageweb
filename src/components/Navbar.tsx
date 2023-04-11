"use client"

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineClose} from "react-icons/ai";

const Navbar=()=>{
    const[menuOpen,setMenu]=useState(false);
    const shukla=()=>{
        setMenu(
            !menuOpen
        )
    }
    return(
        <>
            <nav className="container relative mx-auto p-6 " >
                    <div className="flex items-center justify-between" >
                        <div className="logo-image pt-2" >
                            <img src="/asset/logo.svg" />
                        </div>
                        <div className="md:hidden" >
                            {
                                menuOpen==false?(
                                    <RxHamburgerMenu size={42} onClick={()=>shukla()}/>
                                ):(
                                    <AiOutlineClose size={42} onClick={()=>shukla()} />
                                )
                            }
                        </div>
                        <div className="hidden md:flex space-x-6 font-bold " >
                            <a href="#" className="hover:text-darkGrayishBlue" >Pricing</a>
                            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                            <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                            <a href="#" className="hover:text-darkGrayishBlue">Comunity</a>
                        </div>
                        
                       <div className="hidden md:block navbar-btn" >
                            <Button text={"Get Started"} bgColor={null} hoverColor={null} textColor={null}/>
                        </div>
                    </div>
                  {
                    menuOpen==false?(""):(
                        <div className="flex flex-col  md:hidden " >
                        <a href="#" className="mx-3 my-2 border-b-2 border-black hover:text-darkGrayishBlue" >Pricing</a>
                        <a href="#" className="mx-3 my-2 border-b-2 border-black hover:text-darkGrayishBlue">Product</a>
                        <a href="#" className="mx-3 my-2 border-b-2 border-black hover:text-darkGrayishBlue">About Us</a>
                        <a href="#" className="mx-3 my-2 border-b-2 border-black hover:text-darkGrayishBlue">Careers</a>
                        <a href="#" className="mx-3 my-2 border-b-2 border-black  hover:text-darkGrayishBlue">Comunity</a>
                        </div>
                    )
                  }
            </nav>  
        
        </>
    )
}


export default Navbar;