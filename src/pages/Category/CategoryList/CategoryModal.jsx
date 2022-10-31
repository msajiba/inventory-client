import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryModal = ({ category, setCategory, refetch }) => {
  const { name, code, id } = category;

  const deleteCategoryHandler = async (id) => {
    const url = `http://localhost:5000/api/category/${id}`;
    const { data } = await axios.delete(url);
    if (data.status) {
      toast.success(`${name} delete successfully`);
    }
    setCategory(null);
    refetch();
  };

  return (
    <>
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="category-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>

          <h3 className="font-bold text-lg">
            Are your sure delete
            <span className="text-primary uppercase"> {name} </span> Category
          </h3>
          <p className="py-4 ">Code : {code}</p>
          <div className="modal-action">
            <button
              onClick={() => deleteCategoryHandler(id)}
              className="btn btn-xs btn-error"
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
