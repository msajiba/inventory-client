import React from "react";

import { FaUserPlus, FaUsers } from "react-icons/fa";
import {Link} from 'react-router-dom';

const CategorySidebar = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow rounded-none ">
      <input type="checkbox" />
      <div className="collapse-title inline-block">  
            Category 
      </div>
      <div className="collapse-content">
        <ul>
          <li>
            <Link to="/dashboard/category-list">
              <FaUsers /> Category List
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-category">
              <FaUserPlus /> New Category
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategorySidebar;
