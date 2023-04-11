import React from "react"
const Features=()=>{
    return(
        <>

           <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row" >
                <div className="flex flex-col space-y-12 md:w-1/2" >
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left" >
                        What's diffrent about Manage?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left" >
                        Manage provides all the functionality your team needs,without the complexity.Our software is tailor-made for modern digital teams.
                    </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2" > 
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" >
                        <div className="heading rounded-l-full bg-brightRedSupLight md:bg-transparent" >
                            <div className="flex items-center space-x-2" >
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed" >
                                    01
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden" >
                                    Track compny-wide progress
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block" >Track company wide progress</h3>
                            <p className="text-darkGrayishBlue" >
                                See how your day-to-day tasks fit into visions.Go from tracking process at the milestone level all the way done to the smallest of detaails.Never lose sight of the bigger picture.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" >
                        <div className="heading rounded-l-full bg-brightRedSupLight md:bg-transparent" >
                            <div className="flex items-center space-x-2" >
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed" >
                                    02
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden" >
                                    Advance built-in reports
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block" >Advance built-in reports</h3>
                            <p className="text-darkGrayishBlue" >
                                Set internal delivery estimaters and track progress toward compnay golas.Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row" >
                        <div className="heading rounded-l-full bg-brightRedSupLight md:bg-transparent" >
                            <div className="flex items-center space-x-2" >
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed" >
                                    03
                                </div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden" >
                                    Everything you need in one place 
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block" >Every thing you need in one place</h3>
                            <p className="text-darkGrayishBlue" >
                                Stop jumping from one service to another to comunicate,store files,track tasks and share documents.Mangae offers and all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        
        </>
    )
}

export default Features;