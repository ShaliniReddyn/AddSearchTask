import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const res = await axios.get("http://localhost:8080/api/users/all");
    setUsers(res.data);
  };

  const handleSearch = async () => {
    const res = await axios.post("http://localhost:8080/api/users/search", { keyword });
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/delete/${id}`);
    fetchAllUsers();
  };

  const handleEdit = (user) => {
    setEditUser({ ...user, password: "" });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:8080/api/users/update/${editUser.id}`, editUser);
    setEditUser(null);
    fetchAllUsers();
  };

  return (
    <div className="card">
      <h2>Users List</h2>
    <div className="search-bar">
  <FaSearch className="search-icon" />
  <input
    type="text"
    placeholder="Search by name, username, or email"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
  />
  <button onClick={handleSearch} className="btn">Search</button>
</div>


      <table className="table">
        <thead>
          <tr>
            <th>Username</th><th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="4">No users found</td></tr>
          ) : (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>{u.firstName} {u.lastName}</td>
                <td>{u.email}</td>
                <td>
                  <button className="btn small" onClick={() => handleEdit(u)}>Edit</button>
                  <button className="btn delete small" onClick={() => handleDelete(u.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {editUser && (
        <div className="edit-box">
          <h3>Edit User</h3>
          <input value={editUser.username} onChange={(e) => setEditUser({ ...editUser, username: e.target.value })} />
          <input value={editUser.firstName} onChange={(e) => setEditUser({ ...editUser, firstName: e.target.value })} />
          <input value={editUser.lastName} onChange={(e) => setEditUser({ ...editUser, lastName: e.target.value })} />
          <input value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
          <input type="password" placeholder="New Password" value={editUser.password} onChange={(e) => setEditUser({ ...editUser, password: e.target.value })} />
          <button className="btn" onClick={handleUpdate}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ListUsers;
