import Card from "./Card";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import SideBar from "./SideBar";
import { TiHomeOutline } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { RiInboxArchiveFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { GiOrganigram } from "react-icons/gi";
import HomeContent from "./HomeContent";

const BluePrintTest = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="grid grid-cols-12 h-12">
        <div className="bg-blue-200 p-3 col-span-1">
          {" "}
          <div className="font-bold text-xl text-gray-800 text-center">HR</div>
        </div>
        
        <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-300 to-blue-500 gap-4 bg-gradient-to-r from-blue-300 to-blue-500 p-2 col-span-11">

            {/* navbar */}

        <div className="text-lg font-medium text-gray-800">CyberCompany</div>

        
        <div className="relative group">
        <input
          type="text"
          className=" w-[300px] border border-gray-300 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search or actions (Ex. Apply Leave)"
        />
        <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-blue-500"/>
        </div>

        <div className="flex items-center justify-end mr-10 ">
      <img
        src="https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-10 h-10 rounded-full border border-1 border-gray-400 shadow-md "
        
      />

        <RiArrowDropDownLine className="text-white text-3xl hover:rotate-180"/>
    </div>
    
     
      </div>
            
        </div>

      {/* Sidebar and Content */}
      <div className="grid grid-cols-12 mt-2">
        {/* Sidebar */}
        <div className="bg-blue-300 left-0 z-40 h-screen border-r-2 border-blue-400 col-span-1">
        <div className="flex flex-col justify-between items-center mx-10 space-y-6 mt-4">
          <div className="flex flex-col items-center">
            <TiHomeOutline className="text-xl" />
            <div className="text-center mt-2">Home</div>
          </div>

          <div className="flex flex-col items-center">
            <FaUserTie className="text-xl" />
            <div className="text-center mt-2">Me</div>
          </div>

          <div className="flex flex-col items-center">
            <RiInboxArchiveFill className="text-xl" />
            <div className="text-center mt-2">Inbox</div>
          </div>

          <div className="flex flex-col items-center">
            <RiTeamFill className="text-xl" />
            <div className="text-center mt-2">Team</div>
          </div>

          <div className="flex flex-col items-center">
            <FaSackDollar className="text-xl" />
            <div className="text-center mt-2">My Finance</div>
          </div>

          <div className="flex flex-col items-center">
            <GiOrganigram className="text-2xl" />
            <div className="text-center mt-2">Org</div>
          </div>
        </div>
        </div>

        {/* Content Area */}
        <div className="col-span-11">
          {/* Upper Navbar */}
          <div className="flex items-center gap-6  p-3 shadow-md">
            <div><a
          href="#"
          className="text-lg from-neutral-200 text-slate-600 hover:text-stone-900"
        >
          Dashboard
        </a></div>
            <div><a
          href="#"
          className="text-lg from-neutral-200 text-slate-600 hover:text-stone-900"
        >
          Welcome
        </a></div>
          </div>

          {/* Main Content */}
          <div className="p-4">
            <div className="grid grid-cols-12 gap-4">
              {/* Left Content Area */}
              <div className="col-span-6">
                <h1>Quick Access</h1>

                {/* Inbox Card */}
                <Card title="Inbox">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-sm text-stone-400">Good job!</div>
                    <div className="text-sm text-stone-400">
                      You have no pending actions
                    </div>
                  </div>
                </Card>

                {/* Holidays Card */}
                <Card title="Holidays">
                  <div className="flex justify-start p-2 text-2xl">
                    Bank Holiday
                  </div>
                </Card>

                {/* On Leave Today Card */}
                <Card title="On Leave Today">
                  <div className="p-2 text-sm text-stone-400">
                    Everyone is working today fine!
                  </div>
                </Card>
              </div>

              {/* Right Content Area */}
              <div className="col-span-6">
                <div className="flex items-center">
                  <button className="bg-gray-400 hover:bg-gray-500 p-3 rounded-sm border border-slate-700">
                    Organisation
                  </button>
                  <button className="bg-gray-400 hover:bg-gray-500 p-3 rounded-sm border border-slate-700">
                    DPIT
                  </button>
                </div>

                {/* Praise Card */}
                <Card title="Praise">
                  <div className="text-stone-400 mt-2">
                    Give praise from here
                  </div>
                </Card>

                {/* Announcements Card */}
                <Card title="">
                  <ul className="flex justify-around gap-8">
                    <li>
                      <a href="">Announcements</a>
                    </li>
                    <li>
                      <a href="">Birthdays</a>
                    </li>
                    <li>
                      <a href="">Work Anniversaries</a>
                    </li>
                    <li>
                      <a href="">New Joinees</a>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluePrintTest;
