import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import dataset from "./dataset";

const DataTable = () => {
    const [data, setData] = useState(dataset.data);

    const handleChange = (activityName, e) => {
        setData(dataset.updateDataset(activityName, e.target.name, e.target.checked));
    };

    return (
        <div className="table container">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Module Name</th>
                        <th>Activity Name</th>
                        <th>Create</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Approve</th>
                    </tr>
                </thead>

                {data.map(
                    (
                        { moduleName, activityName, isCreate, isView, isEdit, isDelete, isApprove },
                        idx
                    ) => (
                        <tbody key={idx} className="semi-bold">
                            <tr>
                                <td>{moduleName}</td>
                                <td>{activityName}</td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name="isCreate"
                                        label={isCreate.toString()}
                                        onChange={(e) => handleChange(activityName, e)}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name="isView"
                                        label={isView.toString()}
                                        onChange={(e) => handleChange(activityName, e)}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name="isEdit"
                                        label={isEdit.toString()}
                                        onChange={(e) => handleChange(activityName, e)}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name="isDelete"
                                        label={isDelete.toString()}
                                        onChange={(e) => handleChange(activityName, e)}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        name="isApprove"
                                        label={isApprove.toString()}
                                        onChange={(e) => handleChange(activityName, e)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    )
                )}
            </Table>
        </div>
    );
};
export default DataTable;
