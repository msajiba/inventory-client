import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";

const ProductSidebar = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow rounded-none ">
      <input type="checkbox" />
      <div className="collapse-title "> Product</div>
      <div className="collapse-content">
        <ul>
          <li>
            <Link to="/dashboard/product-list">
              <FaClipboardList /> Product List
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-product">
              <AiFillPlusCircle /> Add Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSidebar;
