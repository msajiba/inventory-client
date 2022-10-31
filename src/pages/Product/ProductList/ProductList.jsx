import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader";
import ProductRow from "./ProductRow";
import axios from "axios";
import ProductModal from "./ProductModal";

const ProductList = () => {
  const [productShow, setProductShow] = useState(null);
  const url = "http://localhost:5000/api/product";
  const { isLoading, data, refetch } = useQuery(
    "products",
    async () => await axios.get(url)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto w-full">
      <h3 className="text-end text-info"> Total : {data?.data?.length} </h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th> No</th>
            <th> Avatar </th>
            <th> Name </th>
            <th> Category </th>
            <th> Quantity </th>
            <th> Price </th>
            <th colSpan="3" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product, index) => (
            <ProductRow
              key={index}
              setProductShow={setProductShow}
              product={product}
              index={index}
            />
          ))}
        </tbody>
      </table>
      {productShow && (
        <ProductModal
          refetch={refetch}
          setProductShow={setProductShow}
          productShow={productShow}
        />
      )}
    </div>
  );
};

export default ProductList;
