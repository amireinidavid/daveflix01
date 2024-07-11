import React from "react";
import Drawer from "rc-drawer";
import MenuDrawer from "./MenuDrawer";

function MainDrawer({ DrawerOpen, closeDrawer }) {
  return (
    <Drawer
      open={DrawerOpen}
      onClose={closeDrawer}
      level={null}
      handler={false}
      placement="right"
    >
      <MenuDrawer />
    </Drawer>
  );
}

export default MainDrawer;
