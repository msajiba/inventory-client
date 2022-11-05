import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader";
import ProductRow from "./ProductRow";
import axios from "axios";
import ProductModal from "./ProductModal";

const ProductList = () => {
  const [productShow, setProductShow] = useState(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // const url = `https://dream-inventory.herokuapp.com/api/product?page=${page}&size=${size}`;
  const url = `http://localhost:5000/api/product?page=${page}&size=${size}`;
  console.log(url);
  const { isLoading, data, refetch } = useQuery(
    ["products", page, size],
    async () => await axios.get(url)
  );

  const { isLoading: productLoading, data: productCount } = useQuery(
    "productCount",
    async () =>
      await axios.get("http://localhost:5000/api/product/product-count")
  );

  if (isLoading || productLoading) {
    return <Loader />;
  }
  const count = productCount?.data?.count;
  const pages = Math.ceil(count / size);




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

      <div></div>

      <div className="text-end pb-20">
        <span> Show per page: </span>
        <select
          defaultValue="10"
          className="border mx-2"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        {[...Array(pages).keys()].map((number, index) => (
          <button
            key={index}
            className={
              page === number
                ? "bg-red-500 px-2 btn btn-xs mx-1"
                : " px-2 border btn btn-xs mx-1"
            }
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
