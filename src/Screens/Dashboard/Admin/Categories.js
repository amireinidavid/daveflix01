import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import { CategoryData } from "../../../Data/CategoryData";
import CategoryModal from "../../../components/Modals/CategoryModal";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();

  const OnEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen]);
  return (
    <Sidebar>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain font-medium trnasitions hover:bg-main flex-rows gap-4 border border-subMain text-white py-2 px-4 rounded "
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        <Table2
          data={CategoryData}
          users={false}
          OnEditFunction={OnEditFunction}
        />
      </div>
    </Sidebar>
  );
}

export default Categories;
