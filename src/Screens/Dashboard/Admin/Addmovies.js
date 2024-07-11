import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Input, Message, Select } from "../../../components/UsedInputs";
import Uploader from "../../../components/Uploader";
import { CategoryData } from "../../../Data/CategoryData";
import { UsersData } from "../../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastModal from "../../../components/Modals/CastModal";

function Addmovies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);
  return (
    <Sidebar>
      <CastModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold ">Create Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game of Thrones"
            type="text"
            bg={true}
          />

          <Input label="Hours" placeholder="2hr" type="text" bg={true} />
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />

          <Input
            label="Year Of Release"
            placeholder="2022"
            type="number"
            bg={true}
          />
        </div>

        {/* images */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without title
            </p>
            <Uploader />
            <div className="w-32 p-2 h-32 bg-main border border-border rounded">
              <img
                src="./assets/movies/97.jpeg"
                alt="movieimage"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* images with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With title
            </p>
            <Uploader />
            <div className="w-32 p-2 h-32 bg-main border border-border rounded">
              <img
                src="./assets/movies/88.jpg"
                alt="movieimage"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        {/* description */}
        <Message
          label="Movie Description"
          placeholder="Make it short and sweet"
        />
        {/* category */}
        <div className="text-sm w-full">
          <Select label="Movie Category" options={CategoryData} />
        </div>

        {/* movie Video */}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-border font-semibold text-sm">Movie Video</p>
          <Uploader />
        </div>
        {/* casts */}
        <div className="grid w-full lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full p-4 bg-main border border-subMain border-dashed text-white rounded"
          >
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flx-colo bg-main border border-border"
              >
                <img
                  src={`assets/movies/${
                    user.image ? user.image : "./assets/log.png"
                  }`}
                  alt={user?.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p>{user?.name}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 bg-dry border flex-colo text-subMain border-border rounded ">
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => {
                      setCast(user);
                      setModalOpen(true);
                    }}
                    className="w-6 h-6 bg-dry border flex-colo text-green-600 border-border rounded "
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* submit */}
        <button className="bg-subMain w-full flex-rows gap-6  font-medium  text-white py-4 rounded ">
          <ImUpload /> Publish Movie
        </button>
      </div>
    </Sidebar>
  );
}

export default Addmovies;
