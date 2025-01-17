import React, { useState } from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdCheckBox } from "react-icons/md";
import MatchNav from "@components/matchslide";
const Matches = () => {

    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [isShow, setIsShow] = useState(false);

    const toggleShow = () => {
        setIsShow(!isShow);
    };

    const [isListShow, setIsListShow] = useState(false);

    const toggleListShow = () => {
        setIsListShow(!isListShow);
    };

    const [isStatus, setIsStatus] = useState(false);

    const toggleStatus = () => {
        setIsStatus(!isStatus);
    };

    const [isListStatus, setIsListStatus] = useState(false);

    const toggleListStatus = () => {
        setIsListStatus(!isListStatus);
    };

    const [isCommunity, setIsCommunity] = useState(false);

    const toggleCommunity = () => {
        setIsCommunity(!isCommunity);
    };

    const [isList, setIsList] = useState(false);

    const toggleList = () => {
        setIsList(!isList);
    };

    const [isListCountry, setIsListCountry] = useState(false);

    const toggleListCountry = () => {
        setIsListCountry(!isListCountry);
    };

    const [isCountry, setIsCountry] = useState(false);

    const toggleCountry = () => {
        setIsCountry(!isCountry);
    };

    const [isGrew, setIsGrew] = useState(false);

    const toggleGrew = () => {
        setIsGrew(!isGrew);
    };

    const [isWork, setIsWork] = useState(false);

    const toggleWork = () => {
        setIsWork(!isWork);
    };

    const [isArea, setIsArea] = useState(false);

    const toggleArea = () => {
        setIsArea(!isArea);
    };

    const [isProfile, setIsProfile] = useState(false);

    const toggleProfile = () => {
        setIsProfile(!isProfile);
    };

    const [isListEating, setIsListEating] = useState(false);

    const toggleListEating = () => {
        setIsListEating(!isListEating);
    };

    const [isListEducation, setIsListEducation] = useState(false);

    const toggleListEducation = () => {
        setIsListEducation(!isListEducation);
    };

    const [isEducation, setIsEducation] = useState(false);

    const toggleEducation = () => {
        setIsEducation(!isEducation);
    };


    const [clickedButton, setClickedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setClickedButton(buttonName);
    };

    const buttonData = [
        { name: 'First', width: 'w-[80px]', padding: 'px-[22px] p-[2px]' },
        { name: 'Previous', width: 'w-[92px]', padding: 'px-[18px] p-[2px]' },
        { name: '1', width: 'w-[30px]', padding: 'px-[10px] p-[3px]' },
        { name: '2', width: 'w-[30px]', padding: 'px-[10px] p-[3px]' },
        { name: '3', width: 'w-[30px]', padding: 'px-[10px] p-[3px]' },
        { name: '4', width: 'w-[30px]', padding: 'px-[10px] p-[3px]' },
        { name: '5', width: 'w-[30px]', padding: 'px-[10px] p-[3px]' },
        { name: 'Next', width: 'w-[80px]', padding: 'px-[22px] p-[2px]' },
        { name: 'Last', width: 'w-[80px]', padding: 'px-[22px] p-[2px]' },
    ];


    return (
        <>
            <Header />

            <MatchNav />
            <div className=" sm:flex md:flex lg:flex" >
                <div className=" mt-10 sm:ml-[2%] md:ml-[6%] lg:ml-[10%] flex ">
                    <div>
                        <div className="bg-[#EB2188] text-white p-3 px-[28px] text-[13px] font-semibold md:w-60 ">
                            APPLY FILTER
                        </div>

                        <div className="mt-1 p-3 border-grey-200 shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>
                                    Photo Setting
                                </h1>

                                <div className="pl-[100px] pt-1" onClick={toggleListVisibility} style={{ cursor: 'pointer' }} >
                                    {isListVisible ? < GoChevronDown /> : <GoChevronRight />}
                                </div>

                            </div>

                            {isListVisible && (
                                <div >

                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>

                                </div>
                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Recently Joined</h1>
                                <div className="pl-[96px] pt-1" onClick={toggleVisibility} style={{ cursor: 'pointer' }} >
                                    {isVisible ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>

                            {isVisible && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>
                            )}

                        </div>


                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Active Members</h1>
                                <div className="pl-[92px] pt-1" onClick={toggleShow} style={{ cursor: 'pointer' }} >
                                    {isShow ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isShow && (

                                <div >

                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}> Annual Income
                                </h1>
                                <div className="pl-[100px] pt-1" onClick={toggleListShow} style={{ cursor: 'pointer' }} >
                                    {isListShow ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isListShow && (
                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-1 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">

                                <h1 style={{ whiteSpace: 'nowrap' }}>Marital Status
                                </h1>
                                <div className="pl-[107px] pt-1" onClick={toggleStatus} style={{ cursor: 'pointer' }} >
                                    {isStatus ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isStatus && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">

                                <h1 style={{ whiteSpace: 'nowrap' }}>Religion
                                </h1>
                                <div className="pl-[147px] pt-1" onClick={toggleListStatus} style={{ cursor: 'pointer' }} >
                                    {isListStatus ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isListStatus && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Community
                                </h1>
                                <div className="pl-[124px] pt-1" onClick={toggleCommunity} style={{ cursor: 'pointer' }} >
                                    {isCommunity ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isCommunity && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200 shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Mother Tongue
                                </h1>
                                <div className="pl-[98px] pt-1" onClick={toggleList} style={{ cursor: 'pointer' }} >
                                    {isList ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isList && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Country Living In
                                </h1>
                                <div className="pl-[89px] pt-1" onClick={toggleListCountry} style={{ cursor: 'pointer' }} >
                                    {isListCountry ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isListCountry && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">

                                <h1 style={{ whiteSpace: 'nowrap' }}>State Living In
                                </h1>
                                <div className="pl-[106px] pt-1" onClick={toggleCountry} style={{ cursor: 'pointer' }} >
                                    {isCountry ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isCountry && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Country Grew Up In
                                </h1>

                                <div className="pl-[68px] pt-1" onClick={toggleGrew} style={{ cursor: 'pointer' }} >
                                    {isGrew ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isGrew && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Working With
                                </h1>

                                <div className="pl-[110px] pt-1" onClick={toggleWork} style={{ cursor: 'pointer' }} >
                                    {isWork ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isWork && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Profession Area
                                </h1>
                                <div className="pl-[100px] pt-1" onClick={toggleArea} style={{ cursor: 'pointer' }} >
                                    {isArea ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isArea && (

                                <div >
                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Profile Created By
                                </h1>
                                <div className="pl-[86px] pt-1" onClick={toggleProfile} style={{ cursor: 'pointer' }} >
                                    {isProfile ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isProfile && (

                                <div >

                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Eating Habits
                                </h1>
                                <div className="pl-[120px] pt-1" onClick={toggleListEating} style={{ cursor: 'pointer' }} >
                                    {isListEating ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isListEating && (

                                <div >

                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Education Level
                                </h1>
                                <div className="pl-[100px] pt-1" onClick={toggleListEducation} style={{ cursor: 'pointer' }} >
                                    {isListEducation ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>

                            {isListEducation && (

                                <div >

                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="mt-1 pl-2 p-3 border-grey-200  shadow shadow-grey-200 font-semibold">
                            <div className="flex">
                                <h1 style={{ whiteSpace: 'nowrap' }}>Education Area
                                </h1>
                                <div className="pl-[100px] pt-1" onClick={toggleEducation} style={{ cursor: 'pointer' }} >
                                    {isEducation ? < GoChevronDown /> : <GoChevronRight />}
                                </div>
                            </div>
                            {isEducation && (

                                <div >

                                    <div className="form-check mt-2  ">
                                        <input type="checkbox" id="form-check-input" className="text-plastic-pink border border-plastic-pink" />
                                        <label className="form-check-label ms-2 ">
                                            All
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Visible to all (10000+)</label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label ms-2">Protected Photo (302)</label>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div>
                </div>

                {/* Right tab */}
                {/* image1 */}


                <div className="ml-5 sm:ml-2 md:ml-3 lg:ml-3 xl:ml-5 sm:w-[380px] md:w-[650px] lg:w-[800px] xl:w-[1000px]">

                    <div className=" border border-gray-300 rounded-lg pr-[40%] mt-10 ">
                        <div className="md:flex lg:flex md:items-start lg:items-start">
                            <img src="/Rectangle 62.png" />
                            <div className="mx-10">
                                <p className="mt-3 font-bold text-[22px] flex">Abc000123
                                    <div className="mt-1 ml-1">

                                        <RiVerifiedBadgeFill className="text-[#EB2188]" />
                                    </div>

                                </p>
                                <div className="mt-2">

                                    <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>28 yrs , 4&apos;5 , 50kg </p>
                                    <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Hindu, Chouhan</p>
                                    <p className="mt-1 "> Hindi</p>
                                </div>
                            </div>
                            <div className="sm:mt-2 md:mt-8 lg:mt-10 xl:mt-12 mt-5 px-10 sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:ml-7 md:ml-0 lg:ml-0 xl:ml-0  ">
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Never Married</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Bhopal, M.P., India</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Web Developer</p>
                            </div>

                        </div>
                        <div className="sm:ml-7 md:ml-60 lg:ml-60 xl:ml-60 ml-5 sm:mt-[20px] md:-mt-[100px] lg:-mt-[110px] xl:-mt-[90px] mt-5 sm:w-[350px] md:w-[370px] lg:w-[400px] xl:w-[600px] w-[200px] px-5 sm:px-3 md:px-0 lg:px-0 xl:px-0">

                            <p> Let Me introduce Myself, I Have Completed My Bachelors in Engineering Modern Yet Traditional,I Am ...
                                <span className="text-blue-500 cursor-pointer">More</span>
                            </p>
                        </div>
                        <div className="text-white bg-[#EB2188] rounded-full px-5 py-3 w-40 sm:ml-10 md:ml-60 lg:ml-60 xl:ml-60 ml-10 mt-3 my-4">
                            <button style={{ whiteSpace: 'nowrap' }}>Connect with her</button>
                        </div>
                    </div>



                    {/* image2 */}
                    <div className=" border border-gray-300 rounded-lg pr-[40%] mt-10 ">
                        <div className="md:flex lg:flex md:items-start lg:items-start">
                            <img src="/Rectangle 60.png" />
                            <div className="mx-10">
                                <p className="mt-3 font-bold text-[22px] flex">Abc000123
                                    <div className="mt-1 ml-1">

                                        <RiVerifiedBadgeFill className="text-[#EB2188]" />
                                    </div>

                                </p>
                                <div className="mt-2">

                                    <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>28 yrs , 4&apos;5 , 50kg </p>
                                    <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Hindu, Chouhan</p>
                                    <p className="mt-1 "> Hindi</p>
                                </div>
                            </div>
                            <div className="sm:mt-2 md:mt-8 lg:mt-10 xl:mt-12 mt-5 px-10 sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:ml-7 md:ml-0 lg:ml-0 xl:ml-0  ">
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Never Married</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Bhopal, M.P., India</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Web Developer</p>
                            </div>

                        </div>
                        <div className="sm:ml-7 md:ml-60 lg:ml-60 xl:ml-60 ml-5 sm:mt-[20px] md:-mt-[100px] lg:-mt-[110px] xl:-mt-[90px] mt-5 sm:w-[350px] md:w-[370px] lg:w-[400px] xl:w-[600px] w-[200px] px-5 sm:px-3 md:px-0 lg:px-0 xl:px-0">

                            <p> Let Me introduce Myself, I Have Completed My Bachelors in Engineering Modern Yet Traditional,I Am ...
                                <span className="text-blue-500 cursor-pointer">More</span>
                            </p>
                        </div>
                        <div className="text-white bg-[#EB2188] rounded-full px-5 py-3 w-40 sm:ml-10 md:ml-60 lg:ml-60 xl:ml-60 ml-10 mt-3 my-4">
                            <button style={{ whiteSpace: 'nowrap' }}>Connect with her</button>
                        </div>
                    </div>
                    {/* image3 */}

                    <div className=" border border-gray-300 rounded-lg pr-[40%] mt-10 ">
                        <div className="md:flex lg:flex md:items-start lg:items-start">
                            <img src="/Rectangle 63.png" />
                            <div className="mx-10">
                                <p className="mt-3 font-bold text-[22px] flex">Abc000123
                                    <div className="mt-1 ml-1">

                                        <RiVerifiedBadgeFill className="text-[#EB2188]" />
                                    </div>

                                </p>
                                <div className="mt-2">

                                    <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>28 yrs , 4&apos;5 , 50kg </p>
                                    <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Hindu, Chouhan</p>
                                    <p className="mt-1 "> Hindi</p>
                                </div>
                            </div>
                            <div className="sm:mt-2 md:mt-8 lg:mt-10 xl:mt-12 mt-5 px-10 sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:ml-7 md:ml-0 lg:ml-0 xl:ml-0 ">
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Never Married</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Bhopal, M.P., India</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Web Developer</p>
                            </div>

                        </div>
                        <div className="sm:ml-7 md:ml-60 lg:ml-60 xl:ml-60 ml-5 sm:mt-[20px] md:-mt-[100px] lg:-mt-[110px] xl:-mt-[90px] mt-5 sm:w-[350px] md:w-[370px] lg:w-[400px] xl:w-[600px] w-[200px] px-5 sm:px-3 md:px-0 lg:px-0 xl:px-0">

                            <p> Let Me introduce Myself, I Have Completed My Bachelors in Engineering Modern Yet Traditional,I Am ...
                                <span className="text-blue-500 cursor-pointer">More</span>
                            </p>
                        </div>
                        <div className="text-white bg-[#EB2188] rounded-full px-5 py-3 w-40 sm:ml-10 md:ml-60 lg:ml-60 xl:ml-60 ml-10 mt-3 my-4">
                            <button style={{ whiteSpace: 'nowrap' }}>Connect with her</button>
                        </div>
                    </div>
                    {/* image4 */}

                    <div className=" border border-gray-300 rounded-lg pr-[40%] mt-10 ">
                        <div className="md:flex lg:flex md:items-start lg:items-start">
                            <img src="/Rectangle 61.png" />
                            <div className="mx-10">
                                <p className="mt-3 font-bold text-[22px] flex">Abc000123
                                    <div className="mt-1 ml-1">

                                        <RiVerifiedBadgeFill className="text-[#EB2188]" />
                                    </div>

                                </p>
                                <div className="mt-2">

                                    <p className="mt-1" style={{ whiteSpace: 'nowrap' }}>28 yrs , 4&apos;5 , 50kg </p>
                                    <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Hindu, Chouhan</p>
                                    <p className="mt-1 "> Hindi</p>
                                </div>
                            </div>
                            <div className="sm:mt-2 md:mt-8 lg:mt-10 xl:mt-12 mt-5 px-10 sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:ml-7 md:ml-0 lg:ml-0 xl:ml-0  ">
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Never Married</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Bhopal, M.P., India</p>
                                <p className="mt-1 " style={{ whiteSpace: 'nowrap' }}>Web Developer</p>
                            </div>

                        </div>
                        <div className="sm:ml-7 md:ml-60 lg:ml-60 xl:ml-60 ml-5 sm:mt-[20px] md:-mt-[100px] lg:-mt-[110px] xl:-mt-[90px] mt-5 sm:w-[350px] md:w-[370px] lg:w-[400px] xl:w-[600px] w-[200px] px-5 sm:px-3 md:px-0 lg:px-0 xl:px-0">

                            <p> Let Me introduce Myself, I Have Completed My Bachelors in Engineering Modern Yet Traditional,I Am ...
                                <span className="text-blue-500 cursor-pointer">More</span>
                            </p>
                        </div>
                        <div className="text-white bg-[#EB2188] rounded-full px-5 py-3 w-40 sm:ml-10 md:ml-60 lg:ml-60 xl:ml-60 ml-10 mt-3 my-4">
                            <button style={{ whiteSpace: 'nowrap' }}>Connect with her</button>
                        </div>
                    </div>

                    <div className="flex mt-10 -ml-20">
                        {buttonData.map((button) => (
                            <div
                                key={button.name}
                                className={`border border-grey-400 ${button.width} ${button.padding} mx-1 rounded-md shadow-sm shadow-grey-200 ${clickedButton === button.name ? 'bg-pink-500' : ''}`}
                            >
                                <button
                                    className={`text-slate-400 hover:text-black w-full h-full ${clickedButton === button.name ? 'text-white' : ''}`}
                                    onClick={() => handleButtonClick(button.name)}
                                >
                                    {button.name}
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Matches;
