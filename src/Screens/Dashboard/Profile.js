import React from "react";
import Sidebar from "./Sidebar";
import Uploader from "../../components/Uploader";
import { Input } from "../../components/UsedInputs";

function Profile() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Update Profile</h2>
        <Uploader />
        <Input
          label="FullName"
          placeholder="Daveflix React App"
          type="text"
          bg={true}
        />

        <Input
          label="Email"
          placeholder="Daveflix@gmail.com"
          type="email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain transitions font-medium hover:bg-main border border-subMain text-white py-4 rounded px-6 w-full sm:w-auto">
            Delect Account
          </button>
          <button className="bg-main transitions font-medium hover:bg-subMain border border-subMain text-white py-4 rounded px-6 w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </Sidebar>
  );
}

export default Profile;