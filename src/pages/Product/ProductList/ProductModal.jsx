import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ProductModal = ({ productShow, refetch, setProductShow }) => {
  const { name, price, quantity, id } = productShow;

  const handleDeleteProduct = async (id) => {
    const url = `http://localhost:5000/api/product/${id}`;
    const { data } = await axios.delete(url);
    if (data.status) {
      toast.success(`${name} Product delete successfully`);
      refetch();
      setProductShow(null);
    }
  };

  return (
    <>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure{" "}
            <span className="text-primary uppercase"> {name} </span> delete this
            product?
          </h3>
          <p className="py-4">Price: {price}</p>
          <p className="">Quantity: {quantity}</p>
          <div className="modal-action">
            <label htmlFor="product-modal" className="btn btn-primary btn-xs">
              Cancel
            </label>
            <button
              onClick={() => handleDeleteProduct(id)}
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

export default ProductModal;
