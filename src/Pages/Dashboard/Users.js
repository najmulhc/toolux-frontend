import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Heading from "../../Components/Heading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [count , setCount] = useState(0)
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authentication: `bearer ${localStorage.getItem("accessKey")}`,
      } 
    }).then((res) => res.json())
    .then(data => setUsers(data.users))
   },[count])
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
        .then(final => {
          console.log(final)
          let test = count;
          test += 1;
          setCount(test)
        })
  }
  const deleteUser = (email) => {
    console.log(email)
    const url = `http://localhost:5000/user/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "authentication":`bearer ${localStorage.getItem("accessKey")}`
      }
    })
      .then(res => res.json())
      .then(final => {
        console.log(final)
        let test = count;
        test += 1;
        setCount(test)
      })
    

  }
 
  if (users) {
    return (
      <main className="w-full h-screen flex flex-col justify-start items-center">
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
                  {user.role === "user" ? (
                    <td className="px-8 py-2 text-lg ">
                      <button className="btn btn-sm btn-success" type="submit" onClick={() => makeAdmin(user.email)}>
                        make admin
                      </button>
                      <button className="btn btn-sm btn-error mx-4" type="submit" onClick={() => deleteUser(user.email)}>
                       Delete user
                      </button>
                    </td>
                ) : ( <td className="px-8 py-2 text-lg ">
                 <button className="btn btn-sm btn-warning btn-disabled" type="submit" >
                  admin
                 </button>
               </td> )} 
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
