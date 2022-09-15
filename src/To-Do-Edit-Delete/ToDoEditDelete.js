import React, { useState } from "react";
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";

const ToDoEditDelete = () => {
  const usersData = [
    {
      id: 1,
      name: "Tania",
      username: "floppydiskette",
      email: "vishal@gmail.com",
      phone: "123",
    },
    {
      id: 2,
      name: "Craig",
      username: "siliconeidolon",
      email: "Tishal@gmail.com",
      phone: "321",
    },
    {
      id: 3,
      name: "Ben",
      username: "benisphere",
      email: "kishal@gmail.com",
      phone: "523",
    },
  ];
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default ToDoEditDelete;
