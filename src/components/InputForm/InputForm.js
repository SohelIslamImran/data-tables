import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./InputForm.css";

const InputForm = ({ handleAddUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (user) => handleAddUser(user);

    return (
        <div className="input-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row className="row justify-content-center">
                    <Form.Group as={Col} xs={4}>
                        <Form.Label className="semi-bold">Name</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Enter Name"
                        />
                        {errors.name && (
                            <p className="text-danger semi-bold ms-2">This field is required</p>
                        )}
                    </Form.Group>
                    <Form.Group as={Col} xs={4}>
                        <Form.Label className="semi-bold">Email</Form.Label>
                        <Form.Control
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Enter Email"
                        />
                        {errors.email && (
                            <p className="text-danger semi-bold ms-2">This field is required</p>
                        )}
                    </Form.Group>
                    <Form.Group as={Col} xs={1}>
                        <Button type="submit">Add</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

export default InputForm;
