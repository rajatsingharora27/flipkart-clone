import React from "react";
import Index from "../../components/Layout/Index";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI";
import { useState } from "react";

const Signup = () => {

    const [firstName ,SetFirstName]=useState("");
    const [lastName ,SetLastName]=useState("");
    const [email ,SetEmail]=useState("");
    const [password ,SetPassword]=useState("");
    // const [error ,SetError]=useState("");

    


  return (
    <Index>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Row>
              <Col md={6}>
              <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => SetFirstName(e.target.value)}
                  />
              </Col>

              <Col md={6}>
                <Input
                  label={"Last Name"}
                  type={"text"}
                  placeholder={"Last Name"}
                  value={lastName}
                  onChange={(data)=>{SetLastName(data.target.value)}}
                />
              </Col>
            </Row>

            <Form>
              <Input
                label={"Email"}
                type={"email"}
                placeholder={"Enter Email"}
                value={email}
                onChange={(data)=>{SetEmail(data.target.value)}}
              />

              <Input
                label={"Password"}
                type={"password"}
                placeholder={"Enter Password"}
                value={password}
                onChange={(data)=>{SetPassword(data.target.value)}}
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

export default Signup;
