import React, { useState } from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";
import axios from "axios";
import Loader from "../../Shared/Loader";
import UserModal from "./UserModal";

const UsersList = () => {
  const [userModalShow, setUserModalShow] = useState(null);

  const { isLoading, error, data, refetch } = useQuery(
    "users",
    async () => await axios.get(`https://dream-inventory.herokuapp.com/api/user`)
  );
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full ">
        <thead>
          <tr>
            <th> No</th>
            <th> Avatar </th>
            <th> Name </th>
            <th> Email </th>
            <th> MObile </th>
            <th> Role </th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user, index) => (
            <UserRow
              key={index}
              setUserModalShow={setUserModalShow}
              user={user}
              index={index}
            />
          ))}
        </tbody>
      </table>
      {userModalShow && (
        <UserModal
          refetch={refetch}
          userModalShow={userModalShow}
          setUserModalShow={setUserModalShow}
        />
      )}
    </div>
  );
};

export default UsersList;
