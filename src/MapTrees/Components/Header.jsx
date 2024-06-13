import { NavLink } from "react-router-dom";
import { FaEarthEurope } from "react-icons/fa6";

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const linkClassSimlator = ({ isActive }) =>
    isActive
      ? "bg-black text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-green-400 font-medium bg-indigo-600 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-green-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink
                className="flex flex-shrink-0 items-center mr-4"
                to="/home"
              >
                <FaEarthEurope className="text-white text-4xl animate-pulse" />

                <span className="font-mono hidden md:block text-white text-2xl font-bold ml-5">
                  Mapiraj/mk
                  <text className="font-light text-sm ml-2">ver 0.9</text>
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/mapTrees" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink
                    to="/mapTreesSimulator"
                    className={linkClassSimlator}
                  >
                    Simulator(beta)
                  </NavLink>
                  <NavLink className={linkClass} to="/mapNewTreesNow">
                    Map Trees
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
