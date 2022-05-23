import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Heading from "../../Components/Heading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { data, isLoading, error } = useQuery("noting", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authentication: `bearer ${localStorage.getItem("accessKey")}`,
      },
    }).then((res) => res.json())
  );
  const makeAdmin = (email) => {
      const user = {email}
      const url = `http://localhost:5000/user/admin/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
    .then(final => console.log(final))
    }
  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);
      if (error) {
        console.log(error)
    }
  if (users) {
    return (
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <Heading> All users </Heading>
        {users && (
          <table className=" rounded-xl border border-primary p-1 shadow-md text-left ">
            <thead className="bg-primary ">
              <tr>
                <th className="px-8 py-2 text-lg ">User Email</th>
                <th className="px-8 py-2 text-lg ">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user) => (
                <tr
                  className="border-b border-primary text-left border-r"
                  key={user._id}
                ><td className="px-8 py-2 text-lg font-medium text-secondary ">
                    {user.email}
                  </td> 
                  {user.role === "user" && (
                    <td className="px-8 py-2 text-lg ">
                      <button className="btn btn-sm btn-success" type="submit" onClick={() => makeAdmin(user.email)}>
                        make admin
                      </button>
                    </td>
                  )} 
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    );
  }
}; 

export default Users;
