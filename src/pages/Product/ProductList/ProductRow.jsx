import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductRow = ({ product, index, setProductShow }) => {
  const { image, name, category, quantity, price, id } = product;

  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td> {index + 1} </td>
        <td>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="image" />
            </div>
          </div>
        </td>
        <td> {name} </td>
        <td> {category} </td>
        <td> {quantity} </td>
        <td> {price} </td>
        <td className="text-center">
          <button onClick={() => navigate(`/dashboard/product/${id}`)}>
            <HiEye className="text-primary" />
          </button>
          <button className="mx-10">
            <FaEdit className="text-green-500" />
          </button>

          <button>
            <label
              className="cursor-pointer"
              htmlFor="product-modal"
              onClick={() => setProductShow(product)}
            >
              <FaTrashAlt className="text-red-500" />
            </label>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
