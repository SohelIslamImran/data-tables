import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import UserTable from "../UserTable/UserTable";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        const isUserExist = users.some(({ email }) => email === user.email);
        if (isUserExist) return console.log(isUserExist);
        return setUsers([...users, user]);
    };

    const handleDeleteUser = (email) => {
        setUsers(users.filter((user) => user.email !== email));
    };

    return (
        <section className="container">
            <InputForm handleAddUser={handleAddUser} />
            <UserTable users={users} handleDeleteUser={handleDeleteUser} />
        </section>
    );
};
export default UserContainer;
