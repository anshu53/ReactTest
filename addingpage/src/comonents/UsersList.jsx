import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const UsersList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApi = async () => {
    setLoading(true);
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setLoading(false);
    setUser(resp.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <h3>Loading.......</h3>
        </div>
      ) : (
        <div>
          <h2>User List</h2>

          <Table striped={1} border={1} responsive="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>WEBSITE</th>
              </tr>
            </thead>
            <tbody>
              {user.map((users) => (
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>{users.phone}</td>
                  <td>{users.website}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default UsersList;
