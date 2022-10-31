import React from "react";

const CategoryRow = ({ category, index, setCategory }) => {
  const { name, code, id } = category;

  return (
    <tr>
      <th> {index + 1} </th>
      <td> {name} </td>
      <td>{code}</td>
      <td className="text-center">
        <button className="btn btn-xs btn-primary"> Update </button>
        <label onClick={()=> setCategory(category)} htmlFor="category-modal" className="btn btn-xs btn-error mx-5">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default CategoryRow;
