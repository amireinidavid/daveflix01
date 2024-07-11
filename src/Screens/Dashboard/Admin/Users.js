import React from "react";
import Sidebar from "../Sidebar";
import Table2 from "../../../components/Table2";
import { UsersData } from "../../../Data/MovieData";

function Users() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movie list</h2>
        </div>
        <Table2 data={UsersData} users={true} />
      </div>
    </Sidebar>
  );
}

export default Users;
