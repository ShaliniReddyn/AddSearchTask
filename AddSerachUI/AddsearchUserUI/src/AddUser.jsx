import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.username = user.username ? "" : "Username is required";
    temp.firstName = /^[A-Za-z]+$/.test(user.firstName) ? "" : "Enter a valid first name";
    temp.lastName = /^[A-Za-z]+$/.test(user.lastName) ? "" : "Enter a valid last name";
    temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) ? "" : "Enter a valid email";
    temp.password = user.password.length >= 5 ? "" : "Password must be 5+ chars";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setMessage("❌ Please correct the highlighted errors.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/users/add", user);
      setMessage("✅ " + res.data.message);
      setUser({ username: "", firstName: "", lastName: "", email: "", password: "" });
    } catch (err) {
      setMessage("⚠️ Error adding user");
    }
  };

  return (
    <div className="card">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        {["username", "firstName", "lastName", "email", "password"].map((field) => (
          <div key={field} className="form-group">
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={user[field]}
              onChange={handleChange}
              className={errors[field] ? "error-border" : ""}
            />
            {errors[field] && <span className="error-text">{errors[field]}</span>}
          </div>
        ))}
        <button type="submit" className="btn">Add User</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddUser;
