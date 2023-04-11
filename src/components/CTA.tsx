import React from "react"
import Button from "./Button";

const CTA=()=>{
    return(
        <>  
            <section className="bg-brightRed" id="cta">
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0" >
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left" >
                        Simplify How your team works tooday
                    </h2>

                    <div>
                        <Button 
                        text={"Get Started"}
                        textColor={"black"}
                        bgColor={"white"} 
                        hoverColor={"gray-300"}
                        
                        />                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA;