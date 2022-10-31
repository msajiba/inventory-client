import React from "react";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import UserSlider from "./UserSidebar";
import ProductSidebar from "./ProductSidebar";
import SalesSidebar from "./SalesSidebar";
import CategorySidebar from "./CategorySidebar";
import PurchasesSidebar from "./PurchasesSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="drawer drawer-mobile">
            <input
              id="navbar-drawer"
              type="checkbox"
              className="drawer-toggle"
            />

            <div className="drawer-content mt-20">
              <Outlet />
            </div>

            <div className="drawer-side ">
              <label htmlFor="navbar-drawer" className="drawer-overlay"></label>

              <ul className="menu p-4 w-50 bg-accent text-base-content mt-16">
                <ProductSidebar />
                <SalesSidebar />
                <PurchasesSidebar />
                <CategorySidebar />
                <UserSlider />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
