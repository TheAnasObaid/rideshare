import React from "react";
import { RxDashboard, RxEnvelopeClosed, RxPerson } from "react-icons/rx";

const style = {
  wrapper: `bg-gray-100`,
  navContainer: `position-fixed bg-white w-80 h-screen`,
  logo: `px-8 py-4 mx-4 text-3xl text-black font-medium flex cursor-pointer text-center mr-16`,
  menus: `px-7 py-3`,
  menu: `flex flex-col gap-2`,
  menuItem: `text-lg px-6 py-3 items-center rounded-lg text-slate-600 font-medium flex cursor-pointer hover:text-black hover:bg-gray-100`,
  menuLink: `pl-4`,
};

function NavbarDriver() {
  return (
    <div className={style.wrapper}>
      <div className={style.navContainer}>
        <div className={style.menus}>
          <ul className={style.menu}>
            <li className={style.menuItem}>
              <RxDashboard />
              <a href="/dashboard" className={style.menuLink}>
                Dashboard
              </a>
            </li>
            <li className={style.menuItem}>
              <RxEnvelopeClosed />
              <a href="/requests" className={style.menuLink}>
                Requests
              </a>
            </li>
            <li className={style.menuItem}>
              <RxPerson />
              <a href="/users" className={style.menuLink}>
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarDriver;
