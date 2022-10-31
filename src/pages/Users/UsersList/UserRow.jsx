import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const UserRow = ({ user, index, setUserModalShow }) => {
  const { username, email, role, mobile, image } = user;

  return (
    <tr>
      <td> {index + 1} </td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="image" />
          </div>
        </div>
      </td>
      <td> {username} </td>
      <td> {email} </td>
      <td> {mobile} </td>
      <td> {role} </td>
      <td className="text-center">
        <button className="mx-5">
          <FaEdit className="text-green-500 inline-block" />
        </button>

        <label
          htmlFor="user-modal"
          onClick={() => setUserModalShow(user)}
          className="cursor-pointer"
        >
          <FaTrashAlt className="text-red-500  inline-block" />
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
