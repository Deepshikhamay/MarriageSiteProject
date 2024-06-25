import React from "react";
import { SlCheck } from "react-icons/sl";



const MatchMaking = () => {

    return (

        <>

            <div>

                <div className="sm:w-[500px] md:w-[660px] lg:w-[800px] xl:w-[1000px] ml-[14%] shadow shadow-grey-200">

                    <div className="border border-gray-400 rounded-lg mt-5 md:mt-0">

                        <h1 className="font-bold text-xl ml-20 mt-5"> What He is Looking For-</h1>

                        <div className="md:flex">

                            <div className="ml-[230px]">
                                <img
                                    className="rounded-full h-[85px] w-[85px] mt-[30px] shadow-md shadow-slate-900"
                                    src="/rect.png" />

                                <div className="mt-[10px] font-semibold">
                                    <span>His Prefrences</span>
                                </div>

                            </div>
                            <div className="flex ml-[120px] mt-[65px] bg-[#EB2188] text-white my-10 py-2 px-1 ">

                                <h1 className="mx-1 font-semibold" style={{ whiteSpace: 'nowrap' }}> You match </h1>

                                <h1 className="font-bold">2/4</h1>

                                <h1 className="mx-1 font-semibold" style={{ whiteSpace: 'nowrap' }}>of his Prefrences</h1>
                            </div>
                            

                            <div className="ml-[120px]">
                                <img
                                    className="rounded-full h-[85px] w-[85px] mt-[30px] shadow-md shadow-slate-900"
                                    src="/rect.png" />

                                <div className="mt-[10px] font-semibold">
                                    <span>You Match</span>
                                </div>

                            </div>

                        </div>

                        <div className="flex mt-[100px] ml-3">
                            <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-4">Age:</h1>
                            <h1 className="mt-4 ml-3 text-[18px]">20 to 27</h1>
                            <div className=" ml-[73%]">
                                <SlCheck className="w-10 h-10 text-pink-500" style={{ stroke: 'green', strokeWidth: '1' }} />
                            </div>
                        </div>

                        <div className="h-[1px] md:w-[93%] w-20 mt-5 mx-[4%] bg-gray-300"></div>


                        <div className="flex ml-3 mt-4">
                            <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-1">Height:</h1>
                            <h1 className="mt-1 ml-3 text-[18px]">5'5"(165cm)to 6'0"(182cm)</h1>

                            <div className=" ml-[56%]">
                                <SlCheck className="w-10 h-10 text-pink-500" style={{ stroke: 'green', strokeWidth: '1' }} />
                            </div>
                        </div>

                        <div className="h-[1px] md:w-[93%] w-20 mt-5 mx-[4%] bg-gray-300"></div>


                        <div className="flex ml-3 mt-4">
                            <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-1 ">Marital Status:</h1>
                            <h1 className=" ml-3 text-[18px] mt-1">Never Married</h1>

                            <div className=" ml-[59%]">
                                <SlCheck className="w-10 h-10 text-pink-500" style={{ stroke: 'green', strokeWidth: '1' }} />
                            </div>
                        </div>

                        <div className="h-[1px] md:w-[93%] w-20 mt-5 mx-[4%] bg-gray-300"></div>


                        <div className="flex ml-3 my-4">
                            <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0">Country Living in:</h1>
                            <h1 className="ml-3 text-[18px]">Turkey,Qatar,Malaysia,Lebanon,Iraq,Iran,Brunei</h1>
                            <div className=" ml-[30%]">
                                <SlCheck className="w-10 h-10 text-pink-500" style={{ stroke: 'green', strokeWidth: '1' }} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    );
};

export default MatchMaking;