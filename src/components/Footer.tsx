import React from "react";


const Footer=()=>{
    return(
        <>

            <footer className="bg-veryDarkBlue" >
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0" >
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-col md:space-y-0 md:items-start" >
                        <div>
                            <img src="asset/logo-white.svg" className="h-8" alt="" />
                        </div>

                        <div className="flex  space-x-4 space-y-4" >
                            <a href="#">
                                <img 
                                src="asset/icon-facebook.svg" 
                                alt=""
                                className="h-8 mt-4"
                                />
                            </a>
                            <a href="#">
                                <img 
                                src="asset/icon-youtube.svg" 
                                alt=""
                                className="h-8"
                                />
                            </a>
                            <a href="#">
                                <img 
                                src="asset/icon-twitter.svg" 
                                alt=""
                                className="h-8"
                                />
                            </a>
                            <a href="#">
                                <img 
                                src="asset/icon-pinterest.svg" 
                                alt=""
                                className="h-8"
                                />
                            </a>
                            <a href="#">
                                <img 
                                src="asset/icon-instagram.svg" 
                                alt=""
                                className="h-8"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-around space-x-32" >
                        <div className="flex flex-col space-y-3 text-white" >
                            <a href="#" className="hover:text-brightRed">Home</a>
                            <a href="#" className="hover:text-brightRed">Pricing</a>
                            <a href="#" className="hover:text-brightRed">Product</a>
                            <a href="#" className="hover:text-brightRed">About</a>
                        </div>
                        <div className="flex flex-col space-y-3 text-white" >
                            <a href="#" className="hover:text-brightRed">Careers</a>
                            <a href="#" className="hover:text-brightRed">Comunity</a>
                            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                           
                        </div>

                    </div>
                </div>
            </footer>
        
        </>
    )
}

export default Footer;