import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <section
        style={{
          backgroundColor: "teal",
          width: 200,
          margin: "auto",
        }}
      >
        <label>ID</label>
        <input
          placeholder="Enter Id here..."
          type="text"
          name="id"
          value={user.id}
          onChange={handleInputChange}
        />
        <label>Name</label>
        <input
          placeholder="Enter Name here..."
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          placeholder="Enter UserName here..."
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email here..."
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <label>Phone</label>
        <input
          placeholder="Enter Phone here..."
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
        />
        <button>{props.editing ? "Update user" : "Add user"}</button>
        {props.editing && (
          <button onClick={resetAddUser} className="button muted-button">
            Cancel
          </button>
        )}
      </section>
    </form>
  );
};

export default EditUserForm;
