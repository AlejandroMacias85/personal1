import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Card, Alert, Form, Button, Container } from "react-bootstrap";
import { getDatabase, ref, get, child } from "firebase/database";
import signuptoday from "../../img/homepage/signuptoday.png";


export const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      history.push("/login");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    
   
    const dbRef = ref(getDatabase());
    get(child(dbRef, "/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="w-full h-screen">
        <Card className="position-relative">
          <img
            clasName="img-fluid img-thumbnail"
            src={signuptoday}
          />
          <Card.Body
            border="white"
            style={{ width: "18rem" }}
            className="bg-dark opacity-75 border border-5 position-absolute top-50 start-50 translate-middle"
          >
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-signin w-100 m-auto">
              <div>
                <h1 className="h3 mb-3 text-white-50">Create an account</h1>
                <p className="mt-5 mb-3 text-white-50">
                  If you have a account{" "}
                  <Link to="/Login" className="underline">
                    Login
                  </Link>
                </p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-white-50">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label></Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check className="text-white-50" type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                 SignUp
                </Button>
                <div className=" have-account w-100 text-center mt-2">
                  Already have an account?{" "}
                  <Link className="signup" to="/login">
                    Log In
                  </Link>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Singup