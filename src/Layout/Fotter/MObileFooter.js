import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg";
import MainDrawer from "../../components/Drawer/MainDrawer";
import { SidebarContext } from "../../Context/DrawerContext";
import DrawerModal from "../../components/Modals/DrawerModal";

function MobileFooter() {
  const [modalOpen, setModalOpen] = useState(false);
  const { mobileDrawer, toggleDrawer } = useContext(SidebarContext);
  console.log(toggleDrawer);
  const active = "bg-dryGray text-main";
  const hover = "hover:text-main hover:bg-white";
  const inActive =
    "transitions text-2xl flex-colo rounded   transitions flex gap-3 items-center p-4   rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <>
      <DrawerModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full ">
        <MainDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer} />
      </div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/movies" className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/favourite" className={Hover}>
            <div className="relative">
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1  ">
                3
              </div>
            </div>

            <FiHeart />
          </NavLink>
          <NavLink className={Hover} to="/login">
            <FiUserCheck />
          </NavLink>
          <button onClick={() => setModalOpen(true)} className={inActive}>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
