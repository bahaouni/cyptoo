import './Register.css'
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom';

import im from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/banner-thumb.png'

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };
    return (
        <div>
            <div class="landing">
                <div class="container">
                    <div class="text">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="email">name</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your name"

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Confirm password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password again "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <Button color="primary" type="submit">
                                Register
                            </Button>
                            <Link to="/signup" > <Button className="bb" color="primary" type="submit">
                                Login
                            </Button>
                            </Link>
                        </Form>
                    </div>
                    <div class="image">
                        <img src={im} alt="" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default SignupForm