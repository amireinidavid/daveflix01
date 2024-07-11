import React from "react";
import Sidebar from "./Sidebar";
import { Input } from "../../components/UsedInputs";

function Password() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold ">Change Password</h2>

        <Input
          label="Prvious Password"
          placeholder="**********"
          type="password"
          bg={true}
        />

        <Input
          label="New Password"
          placeholder="**********"
          type="password"
          bg={true}
        />
        <Input
          label="Confirm Password"
          placeholder="**********"
          type="password"
          bg={true}
        />
        <div className="flex items-center justify-end my-4 ">
          <button className="bg-subMain transitions font-medium hover:bg-main border border-subMain text-white py-4 rounded px-6 w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </Sidebar>
  );
}

export default Password;
