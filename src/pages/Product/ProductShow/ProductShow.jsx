import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const ProductShow = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/api/product/${id}`;

  const getSingleProduct = async () => {
    const { data } = await axios.get(url);
    console.log(data)
  };

  getSingleProduct();

  return (
    <div>
      <h3>
        Product show ... <span className="btn btn-xs"> {id} </span>{" "}
      </h3>
    </div>
  );
};

export default ProductShow;
