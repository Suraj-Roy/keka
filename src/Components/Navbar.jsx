import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-200 shadow-md">
      <div className="mx-10">
        <div className="font-bold text-xl text-gray-800">HR</div>
      </div>
      <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-300 to-blue-500 p-2 gap-4">
        <div className="text-lg font-medium text-gray-800">CyberCompany</div>

        
        <div className="relative group">
        <input
          type="text"
          className=" w-[300px] border border-gray-300 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search or actions (Ex. Apply Leave)"
        />
        <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-blue-500"/>
        </div>

        <div className="flex items-center justify-end mr-10">
      <img
        src="https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-10 h-10 rounded-full border border-1 border-gray-400 shadow-md "
        
      />

        <RiArrowDropDownLine className="text-white text-3xl hover:rotate-180"/>
    </div>
    
     
      </div>
    </div>
  );
};

export default Navbar;
