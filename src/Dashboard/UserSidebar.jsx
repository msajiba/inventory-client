import React from "react";

import { FaUserPlus, FaUsers } from "react-icons/fa";
import {Link} from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow rounded-none ">
      <input type="checkbox" />
      <div className="collapse-title inline-block">  
            Users  
      </div>
      <div className="collapse-content">
        <ul>
          <li>
            <Link to="/dashboard/users-list">
              <FaUsers /> Users List
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-user">
              <FaUserPlus /> New User
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSidebar;
