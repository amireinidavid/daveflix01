import React from "react";
import Sidebar from "../Sidebar";
import { Movies } from "../../../Data/MovieData";
import Table from "../../../components/Table";

function Movielist() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movie list</h2>
          <button className="bg-main font-medium trnasitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded ">
            Delete All
          </button>
        </div>
        <Table data={Movies} admin={true} />
      </div>
    </Sidebar>
  );
}

export default Movielist;
