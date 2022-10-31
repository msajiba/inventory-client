import React from "react";

import { FaUserPlus, FaUsers } from "react-icons/fa";
import {Link} from 'react-router-dom';

const PurchasesSidebar = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow rounded-none ">
      <input type="checkbox" />
      <div className="collapse-title inline-block">  
            Purchases  
      </div>
      <div className="collapse-content">
        <ul>
          <li>
            <Link to="/dashboard/purchases-list">
              <FaUsers /> Purchases List
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-purchases">
              <FaUserPlus /> New Purchases
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PurchasesSidebar;
