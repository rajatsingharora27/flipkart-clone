import React,{useState} from "react";
import Index from "../../components/Layout/Index";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI";

const Signin = () => {

    const [email ,SetEmail]=useState("");
    const [password ,SetPassword]=useState("");


    return (
        <Index>
            <Container>
                <Row style={{ margin: "50px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Input
                                label={"Email"}
                                type={"email"}
                                placeholder={"Enter Email"}
                                value={email}
                                onChange={(data) => { SetEmail(data.target.value) }}
                            />

                            <Input
                                label={"Password"}
                                type={"password"}
                                placeholder={"Enter Password"}
                                value={password}
                                onChange={(data) => { SetPassword(data.target.value) }}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Index>
    );
};

export default Signin;
