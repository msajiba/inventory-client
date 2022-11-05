import React from "react";
import CategoryList from "../pages/Category/CategoryList/CategoryList";
import NewCategory from "../pages/Category/NewCategory/NewCategory";
import AddProduct from "../pages/Product/AddProduct/AddProduct";
import ProductList from "../pages/Product/ProductList/ProductList";
import ProductShow from "../pages/Product/ProductShow/ProductShow";
import AddPurchases from "../pages/Purchases/AddPurchases/AddPurchases";
import PurchasesList from "../pages/Purchases/PurchasesList/PurchasesList";
import NewSales from "../pages/Sales/NewSales/NewSales";
import SalesList from "../pages/Sales/SalesList/SalesList";
import UserAdd from "../pages/Users/UserAdd/UserAdd";
import UsersList from "../pages/Users/UsersList/UsersList";

const routes = [
  { path: "product-list", Component: ProductList },
  { path: "add-product", Component: AddProduct },
  { path: "add-user", Component: UserAdd },
  { path: "users-list", Component: UsersList },
  { path: "sales-list", Component: SalesList },
  { path: "add-sales", Component: NewSales },
  { path: "add-category", Component: NewCategory },
  { path: "category-list", Component: CategoryList },
  { path: "purchases-list", Component: PurchasesList },
  { path: "add-purchases", Component: AddPurchases },
  { path: "product/:id", Component: ProductShow },
];

export default routes;
