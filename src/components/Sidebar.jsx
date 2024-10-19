import React, { useContext, useState } from "react";
import logo from "../assets/mbs.png";
import { ChevronFirst, ChevronLast } from "lucide-react";

const SidebarContext = React.createContext();

function Sidebar({ children }) {
  const [expend, setexpend] = useState(true);
  return (
    <SidebarContext.Provider value={{ expend }}>
      <aside className="h-screen ">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 flex justify-between items-center">
            <img
              src={logo}
              alt="Logo"
              className={`overflow-hidden transition-all ${
                expend ? "w-32" : "w-0"
              }`}
            />
            <button
              onClick={() => setexpend((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expend ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
          <ul className="flex flex-col flex-grow">{children}</ul>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}

function SidebarItem({ icon, text, alert, active }) {
  const { expend } = useContext(SidebarContext);
  return (
    <li
      className={`relative group flex items-center p-2 hover:bg-gray-100 cursor-pointer transition-color-group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expend ? "w-52 ml-2" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div>
          <span
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expend ? "" : "top-2"
            }`}
          >
            !
          </span>
        </div>
      )}
      {!expend && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-2 bg-indigo-100 text-indigo-800 text-sm invisible opacity-0 translate-x-3 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export { Sidebar, SidebarItem };
