import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <h3 className="text-primary my-3 text-center">Please Login !!!</h3>
      <Form className="w-50 mx-auto my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
      <p className="text-center">
        <small>
          New to this website? Please{" "}
          <Link className="text-decoration-none" to="/register">
            Register
          </Link>
        </small>
      </p>
      <p className="text-center">
        <small>
          Forget Password?
          <button type="button" className="btn btn-link text-decoration-none">
            Reset Password
          </button>
        </small>
      </p>
    </Container>
  );
};

export default Login;
