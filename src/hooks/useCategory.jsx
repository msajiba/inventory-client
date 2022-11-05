import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../pages/Shared/Loader";

const useCategory = () => {
  const url = `https://dream-inventory.herokuapp.com/api/category`;
  const { isLoading, data, refetch } = useQuery(
    "demo",
    async () => await axios.get(url)
  );

  if (isLoading) {
    return <Loader />;
  }
 
  return {data, refetch};
};

export default useCategory;
