import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    // console.log(email);
    setUserEmail(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("please Enter your email");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password Reset email sent. Please check your email.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <h2 className="text-primary my-3 text-center">Please Login !!!</h2>
      <Form className="w-50 mx-auto my-4" onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        {success && <p className="text-success">Login Successfully.</p>}
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
          <button type="button" onClick={handleForgetPassword} className="btn btn-link text-decoration-none">
            Reset Password
          </button>
        </small>
      </p>
    </Container>
  );
};

export default Login;
