import React from "react";
import { Button, Table } from "react-bootstrap";
import "./UserTable.css";

const UserTable = ({ users, handleDeleteUser }) => (
    <div className="user-table table">
        <Table hover borderless responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            {users.length ? (
                users.map(({ name, email }, idx) => (
                    <tbody key={idx} className="semi-bold">
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>
                                <Button onClick={() => handleDeleteUser(email)}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                ))
            ) : (
                <h6 className="text-center">No Users</h6>
            )}
        </Table>
    </div>
);

export default UserTable;
