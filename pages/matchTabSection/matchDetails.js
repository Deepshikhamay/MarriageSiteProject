import React from "react";
import Footer from "@components/footer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineTempleHindu } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiBarbedStar } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleRobbery, FaDollarSign } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";




const MatchDetails = () => {
 

  return (

    <>
     
      <div>

        <div className="sm:w-[500px] md:w-[660px] lg:w-[800px] xl:w-[1000px] ml-[14%] shadow shadow-grey-200 ">
        

          <div className="border border-gray-400 rounded-lg mt-5 md:mt-0">

           
            <div>
              <div className="font-bold text-xl mt-5 md:ml-10 px-3 md:px-0">
                About Canditate_name-
              </div>
              <div className="flex">
                <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-5">Age:</h1>
                <h1 className="mt-5 ml-3 text-[18px]">20 to 27</h1>
              </div>

              <div className="flex">
                <h1 className="font-bold text-xl md:ml-10 px-3 md:px-0 mt-3">Profile Created by:</h1>
                <h1 className="mt-3 ml-3 px-3 md:px-0 md:text-[18px]">Self</h1>
              </div>
              <p className="text-[20px] md:ml-10 md:mx-20 px-5 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              <div className="h-[1px] md:w-[81%] w-20 mt-5 mx-[4%] bg-gray-300"></div>
            </div>

            <div>
              <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Contact Details-</h1>

              <div className="md:flex">
                <div className="ml-5 mt-7">
                  <FaPhoneAlt className="text-[#EB2188]" />
                </div>
                <h1 className="font-bold text-xl ml-3 mt-5 ">

                  Contact Number:</h1>
                <h1 className="mt-5 ml-3 text-[18px]">+917568XXXXXX</h1>
              </div>
              <div className="md:flex">
                <div className="ml-5 mt-4">
                  <MdOutlineMailOutline className="text-[#EB2188] text-[20px]" />
                </div>
                <h1 className="font-bold text-xl ml-3 mt-3">Email ID:</h1>
                <h1 className="mt-3 ml-3 md:text-[18px]">X0X0X0X0X0@gmail.com</h1>
              </div>
              <div className="flex ml-6 mt-3 text-[18px]">
                <span className="text-[#EB2188] cursor-pointer font-semibold">Upgrade New</span>
                <p className="ml-1">to view details</p>
              </div>
            </div>
            <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

            <div>
              <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Lifestyle-</h1>
              <div className="md:ml-10 mt-8 flex px-3 md:px-0">
                <GiKnifeFork className="text-[#EB2188] text-[23px]" />
                <h1 className=" ml-3 font-semibold text-[18px]">Non-Vegetarian</h1>
              </div>
            </div>
            <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

            <div>
              <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Background-</h1>
              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <MdOutlineTempleHindu className="text-[#EB2188] text-[24px]" />
                <div className=" ml-2 font-semibold text-[18px]">Hindus, Hindi</div>
              </div>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <IoIosPeople className="text-[#EB2188] text-[24px]" />
                <div className=" ml-2 font-semibold text-[18px]">Chouhan</div>
              </div>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <GiBarbedStar className="text-[#EB2188] text-[24px]" />
                <h1 className=" ml-2 font-semibold text-[18px]">Occassionally Pooja and fasts</h1>
              </div>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <IoLocationSharp className="text-[#EB2188] text-[24px]" />
                <h1 className="ml-2 font-xl font-bold">Indore, M.P., India</h1>
              </div>
            </div>

            <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

            <div>
              <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0 mt-5"> Family Details-</h1>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <FaPeopleRobbery className="text-[#EB2188] text-[24px]" />
                <div className="ml-2 font-semibold text-[18px]">Father is retired, Mother is a homemaker</div>
              </div>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <IoIosPeople className="text-[#EB2188] text-[24px]" />
                <div className="ml-2 font-semibold text-[18px]">4 Sisters, (2Married)</div>
              </div>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <IoLocationSharp className="text-[#EB2188] text-[24px]" />
                <div className="ml-2 font-semibold text-[18px]">Jaipur, Rajasthan, India</div>
              </div>

              <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                <FaDollarSign className="text-[#EB2188] text-[24px]" />
                <div className="ml-2 font-semibold text-[18px]">Family Financial Status</div>
              </div>
              <div className="flex">
                <h1 className="font-bold text-xl ml-[5%] mt-5"> Middle-</h1>
                <h1 className="mt-5 ml-3 text-[18px]">Annual family income is 10-30lakhs</h1>
              </div>

              <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-300"></div>

              <div>
                <h1 className="font-bold text-2xl md:ml-10 px-3 md:px-0  mt-5"> Education $ Career-</h1>
                <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                  <FcManager className="text-[#EB2188] text-[24px]" />
                  <h1 className="ml-2 font-semibold text-[18px]">Sr. Manager/ Manager</h1>
                </div>

                <div className="md:ml-10 px-3 md:px-0 mt-7 flex">
                  <FaDollarSign className="text-[#EB2188] text-[24px]" />
                  <h1 className="ml-2 font-semibold text-[18px]">Earns AED 60K to 90K annually</h1>
                </div>
              </div>

              <div className="h-[1px] md:w-[81%] mt-5 mx-[4%] bg-gray-400"></div>

            </div>

          </div>
        </div>

      </div>


      <Footer />
    </>



  );
};


export default MatchDetails;
