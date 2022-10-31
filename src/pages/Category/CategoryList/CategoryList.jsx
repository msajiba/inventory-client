import React, { useState } from "react";
import CategoryRow from "./CategoryRow";
import CategoryModal from "./CategoryModal";
import useCategory from "../../../hooks/useCategory";

const CategoryList = () => {
  const [category, setCategory] = useState(null);

  const {data, refetch} = useCategory();

  const categoryList = data?.data;

  return (
    <>
      <div>
        <h3 className="text-end"> Total : {categoryList?.length} </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th> SL </th>
              <th>Name</th>
              <th colSpan="">Code</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList?.map((category, index) => (
              <CategoryRow
                key={category._id}
                index={index}
                setCategory={setCategory}
                category={category}
              />
            ))}
          </tbody>
        </table>
      </div>

      {category && (
        <CategoryModal
          refetch={refetch}
          setCategory={setCategory}
          category={category}
        />
      )}
    </>
  );
};

export default CategoryList;
