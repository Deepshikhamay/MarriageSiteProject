import React, { useState } from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import MatchNav from "@components/matchslide";
import { BsThreeDotsVertical, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import MatchDetails from "./matchDetails";
import MatchMaking from "./matchMaking";

const Index = () => {

    // const [selectedTab, setSelectedTab] = useState("Profile Details");
    // const handleTabClick = (tabName) => {
    //     setSelectedTab(tabName);
    // }

    const [selectedItem, setSelectedItem] = useState("Profile Details");

    const handleItemClick = (label) => {
        setSelectedItem(label);
    };

    const renderbothsection = () => {
        switch (selectedItem) {
            case "Profile Details":
                return <MatchDetails />;
            case "Partner Prefrences":
                return <MatchMaking />;
        }
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };


    return (
        <>
            <Header />
            <MatchNav />
            <div>

                <div className="font-bold text-2xl sm:ml-[10%] md:ml-[20%] lg:ml-[23%] xl:ml-[25%] mx-5 md:mx-0 mt-12">
                    Here are Today&apos;s top Matches for you.Connect with them now!
                </div>

                <div className="flex sm:ml-[65%] md:ml-[75%] lg:ml-[70%] xl:ml-[70%] ml-[70%] sm:mt-[2%] md:mt-[3%] lg:mt-[4%] xl:mt-[4%] mt-[7%]">

                    <div>
                        <BsChevronLeft className="sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]" style={{ fontWeight: 'bold', strokeWidth: '1' }} />

                    </div>
                    <h1 className=" sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] text-[#EB2188] -mt-2 mx-5 font-bold">2/10</h1>
                    <div>
                        <BsChevronRight className="sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]" style={{ fontWeight: 'bold', strokeWidth: '1' }} />

                    </div>
                </div>
          
          <div className="relative">
                <div
                    className="sm:ml-[120%] md:ml-[130%] lg:ml-[200%] xl:ml-[76%] ml-[100%] sm:-mt-[210px] -mt-[220px] md:mt-0 lg:mt-0 xl:mt-2 "
                    onClick={toggleDropdown}
                    >
                    <BsThreeDotsVertical className="text-3xl cursor-pointer" />
                </div>

                {isDropdownOpen && (
                    
                    <div className="border border-grey-300 xl:ml-[66%] xl:w-[170px] xl:p-4 xl:px-6 shadow-md shadow-grey-300 rounded-md bg-slate-100 absolute z-10 -mt-7">
                        <div className="font-semibold">Add to Shortlist</div>
                        <div className="mt-1 font-semibold" style={{ whiteSpace: 'nowrap' }}>Don't Show Again</div>
                        <div className="mt-1 font-semibold">Block Profile</div>
                        <div className="mt-1 font-semibold" style={{ whiteSpace: 'nowrap' }}>Report Profile</div>
                    </div>
                )}
            </div>



                <div className="sm:w-[500px] md:w-[660px] lg:w-[800px] xl:w-[1000px] ml-[14%] shadow shadow-grey-200 ">

                    <div className=" border border-gray-400 rounded-lg pr-[40%] -mt-[30px] ">
                        <div className="md:flex md:items-start ]">
                            <img src="/Rectangle 63.png" />
                            <div className="mx-10">
                                <p className="mt-3 font-bold text-[22px] flex">Abc000123
                                    <div className="mt-1 ml-1">

                                        <RiVerifiedBadgeFill className="text-[#EB2188]" />
                                    </div>
                                   

                                </p>
                                <div className="mt-2">

                                    <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>28 yrs , 4&apos;5 , 50kg </p>
                                    <p className="mt-1 ">Hindu, Chouhan</p>
                                    <p className="mt-1"> Hindi</p>
                                </div>
                            </div>
                            <div className="sm:mt-2 md:mt-8 lg:mt-10 xl:mt-12 mt-5 px-10 sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:ml-7 md:ml-0 lg:ml-0 xl:ml-0  ">
                                <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>Never Married</p>
                                <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>Bhopal, M.P., India</p>
                                <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>Web Developer</p>
                            </div>

                        </div>
                        <div className="sm:ml-7 md:ml-60 lg:ml-60 xl:ml-60 ml-5 sm:mt-[20px] md:-mt-[100px] lg:-mt-[110px] xl:-mt-[90px] mt-5 sm:w-[350px] md:w-[370px] lg:w-[400px] xl:w-[600px] w-[200px] px-5 sm:px-3 md:px-0 lg:px-0 xl:px-0">

                            <p> Let Me introduce Myself, I Have Completed My Bachelors in Engineering Modern Yet Traditional,I Am ...
                                <span className="text-blue-500 cursor-pointer">More</span>
                            </p>
                        </div>
                        <div className="text-white bg-[#EB2188] rounded-full px-5 py-3 my-4 w-40 sm:ml-10 md:ml-60 lg:ml-60 xl:ml-60 ml-10 mt-3 ">
                            <button style={{ whiteSpace: 'nowrap' }}>Connect with her</button>
                        </div>
                    </div>

                    <div className="md:flex border border-gray-300 ">
                        <div
                            className={`cursor-pointer md:w-[50%] mt-3 pb-4 text-xl px-3 md:px-0 font-semibold  ${selectedItem === "Profile Details" ? "border-b-[4px] border-[#EB2188] " : " "}
                           
                            `}
                            onClick={() => handleItemClick("Profile Details")}
                        >
                            <div className="md:ml-[42%] mt-1">
                                Profile Details
                            </div>

                        </div>
                        <div
                            className={`cursor-pointer md:w-[50%] mt-3 pb-4 text-xl  px-3 md:px-0 font-semibold ${selectedItem === "Partner Prefrences" ? "border-b-[4px] border-[#EB2188]" : " "}
                                
                                 `}
                            onClick={() => handleItemClick("Partner Prefrences")}
                        >
                            <div className="md:ml-[40%] mt-1">
                                Partner Prefrences
                            </div>

                        </div>
                    </div>

                </div>

                <div className="both-section">{renderbothsection()}</div>

            </div>


            <Footer />

        </>
    )
};

export default Index;