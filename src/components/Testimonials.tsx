import React from "react";
import Button from "./Button";

const Testimonials=()=>{
    return(
        <>
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center" >

                <h2 className="text-4xl font-bold text-center" >
                    What's Diffrent Abou Mangae?
                </h2>

                <div className="flex flex-col mt-24 md:flex-row md:space-x-6" >
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3" >
                        <img src="/asset/avatar-anisha.png" className="w-16 -mt-14" alt="" />
                        <h5 className="text-lg font-bold" >Anisha Li</h5>
                        <p className="text-sm text-darkGrayishBlue" >
                            "Mangae has supercharged our teaam's workflow.The ability to maintain visibity on larger milestone at all times keep everyone motivated"
                        </p>
                    </div>
                    <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3" >
                        <img src="/asset/avatar-ali.png" className="w-16 -mt-14" alt="" />
                        <h5 className="text-lg font-bold" >Ali Bravo</h5>
                        <p className="text-sm text-darkGrayishBlue" >
                           "We have been able to cancle so many other subsciption since usinh Mange.There is no more cross-channel confusion evryone is much more focused"
                        </p>
                    </div>
                    <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3" >
                        <img src="/asset/avatar-richard.png" className="w-16 -mt-14" alt="" />
                        <h5 className="text-lg font-bold" >Richard Watts</h5>
                        <p className="text-sm text-darkGrayishBlue" >
                            "Mangae has supercharged our teaam's workflow.The ability to maintain visibity on larger milestone at all times keep everyone motivated"
                        </p>
                    </div>

                 
                </div>
                <div className="my-16" >
                        <Button 
                        text={"Get Strted"} 
                        bgColor={null} 
                        hoverColor={null}
                        textColor={null}
                        /> 
                </div>
            </div>

        </>
    )
}

export default Testimonials;