import React, { useState } from "react";
import MainDrawer from "../components/Drawer/MainDrawer";

function Test() {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button
        className="bg-subMain border-3 border-main rounded hover:bg-subMain text-white"
        onClick={toggleDrawer}
      >
        open drawer
      </button>
      <MainDrawer visible={visible} closeDrawer={toggleDrawer} />
      <button
        className="bg-subMain border-3 border-main rounded hover:bg-subMain text-white"
        onClick={visible}
      >
        closeDrawer
      </button>
    </>
  );
}

export default Test;
