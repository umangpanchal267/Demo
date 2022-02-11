import React from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const Register = () => {
  const initialValues = { fname:"", lname:"", city:"", phone:"", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      errors.fname = "first name is required";
    }
    if (!values.lname) {
      errors.lname = "last name is required";
    }
    if (!values.city) {
      errors.city = "city is required";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email formate";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password msut be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password msut be less than 10 characters";
    }
    if (values.password != values.cnfPassword) {
      errors.cnfPassword = "password doesnt match";
    }
    return errors;
  };

  return (
    <>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in Successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <Card
        style={{
          width: "40%",
          borderColor: "black",
          margin: "50px 0px 0px 400px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              color: "darkblue",
              marginBottom: "30px",
              fontSize: "30px",
            }}
          >
            Registration
          </Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} className="mb-3">
                FirstName:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="fname"
                  value={formValues.fname}
                  onChange={handleChange}
                  placeholder="FirstName"
                />
                 <p class="text-danger">{formErrors.fname}</p>
              </Col>

              <Form.Label column sm={3} className="mb-3">
                LastName:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="lname"
                  value={formValues.lname}
                  onChange={handleChange}
                  placeholder="LastName"
                />
                <p class="text-danger">{formErrors.lname}</p>
              </Col>

              <Form.Label column sm={3} className="mb-3">
                City:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  placeholder="City"
                />
                <p class="text-danger">{formErrors.city}</p>
              </Col>

              <Form.Label column sm={3} className="mb-3">
                PhoneNumber:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="PhoneNumber"
                />
                <p class="text-danger">{formErrors.phone}</p>
              </Col>

              <Form.Label column sm={3} className="mb-3">
                Email:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <p class="text-danger">{formErrors.email}</p>
              </Col>

              <Form.Label column sm={3} className="mb-3">
                Password:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <p class="text-danger">{formErrors.password}</p>
              </Col>

              <Form.Label column sm={3} className="mb-3">
                Confirm-Password:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  name="cnfPassword"
                  value={formValues.cnfPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                <p class="text-danger">{formErrors.cnfPassword}</p>
              </Col>
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              style={{ marginLeft: "150px" }}
            >
              SUBMIT
            </Button>
            <Button variant="danger" style={{ marginLeft: "60px" }}>
              CANCEL
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Register;
