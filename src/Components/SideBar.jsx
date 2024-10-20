import { TiHomeOutline } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { RiInboxArchiveFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { GiOrganigram } from "react-icons/gi";
import HomeContent from "./HomeContent";

const SideBar = () => {
  return (
    <div className="flex w-screen">
      <div className="bg-blue-300 left-0 z-40 w-[110px] h-screen border-r-2 border-blue-400">
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
      
      
    </div>
  );
};

export default SideBar;
