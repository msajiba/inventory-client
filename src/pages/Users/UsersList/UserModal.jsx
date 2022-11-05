import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const UserModal = ({
  setUserModalShow,
  userModalShow,
  refetch = { refetch },
}) => {
  const { username, email, id } = userModalShow;

  const handlerDeleteUser = async (id) => {
    const url = `https://dream-inventory.herokuapp.com/api/user/${id}`;

    const { data } = await axios.delete(url);
    if (data.status) {
      toast.success(`${username} user delete successfully`);
    }

    setUserModalShow(null);
    refetch();
  };

  return (
    <>
      <input type="checkbox" id="user-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are your sure delete
            <span className="text-primary uppercase"> {username} </span>
          </h3>
          <p className="py-4 text-secondary">Email : {email} </p>
          <div className="modal-action">
            <label htmlFor="user-modal" className="btn btn-xs ">
              Cancel
            </label>
            <button
              onClick={() => handlerDeleteUser(id)}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
