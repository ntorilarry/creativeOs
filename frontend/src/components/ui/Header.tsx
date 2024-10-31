import { Avatar, Logo } from "@/assets";
import { HiMiniBars4 } from "react-icons/hi2";
// import NavigationTabs from "../../pages/templates/components/NavigationTabs";

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-[#FAF8FC] lg:bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
      <img src={Logo} className="block lg:hidden" aria-hidden="true" alt="" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 justify-end items-center gap-x-4 lg:gap-x-6  lg:hidden">
          <img
            src={Avatar}
            className="w-8 h-8 my-auto"
            aria-hidden="true"
            alt=""
          />

          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <HiMiniBars4 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
