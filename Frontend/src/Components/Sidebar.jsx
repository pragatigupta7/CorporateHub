{/*import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiFinch } from 'react-icons/gi';
import { FiLogOut} from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../assets/hero.png';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg  text-white  text-md ';
  const normalLink = 'flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray ';

  return (
    <div className="mx-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-1">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <GiFinch  size={42} color={currentColor}/> <span>FinchPro</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/*Admin Profile Card */}
      {/*}    <div className="flex flex-col dark:text-gray-200 dark:bg-main-dark-bg shadow-md p-4 border dark:border-transparent rounded-md mt-1 mb-6 items-center justify-between">
            <img
              className="rounded-full w-16 h-16"
              src={avatar}
              alt="user-profile"
            />
            <p className="font-medium text-lg">Michael Roberts</p>
            <p className="font-normal text-sm text-gray-600">Administrator</p>
            <div className="mt-4 flex flex-row gap-3">
              <div className="flex flex-col items-center gap-1">
                <p className="text-gray-400 text-xs">Daily</p>
                <p className="text-black dark:text-gray-200 text-sm font-semibold">$10,000</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-gray-400 text-xs">Weekly</p>
                <p className="text-black dark:text-gray-200 text-sm font-semibold">$50,000</p>
              </div>
            </div>
          </div>
          {/*Links */}
          {/*<div className="mt-2">
            {links.map((item) => (
              <div key={item.title}>
                <p className="hidden">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize text-sm">{link.id}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>          
        </>
      )}
    </div>
  );
};

export default Sidebar;*/}