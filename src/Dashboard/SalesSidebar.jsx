import React from "react";

import { FaUserPlus, FaUsers } from "react-icons/fa";
import {Link} from 'react-router-dom';

const SalesSidebar = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow rounded-none ">
      <input type="checkbox" />
      <div className="collapse-title inline-block">  
            Sales
      </div>
      <div className="collapse-content">
        <ul>
          <li>
            <Link to="/dashboard/sales-list">
              <FaUsers /> Sales List
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-sales">
              <FaUserPlus /> New Sales
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalesSidebar;
