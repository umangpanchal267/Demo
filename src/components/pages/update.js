import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/navbar";

const Update = () => {
    
  const initialValues = { fname:"", lname:"", city:"", phone:"" };
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
    return errors;
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Update Successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <div className="row">
        <div className="col"></div>
        <div className="col-6 py-4">
          <div className="text-center">
            <h1>Update Form</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="firstnamee" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={formValues.fname}
                onChange={handleChange}
              />
              <p class="text-danger">{formErrors.fname}</p>
            </div>
            <div className="mb-3">
              <label for="lastnamee" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={formValues.lname}
                onChange={handleChange}
              />
              <p class="text-danger">{formErrors.lname}</p>
            </div>
            <div className="mb-3">
              <label for="cityy" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={formValues.city}
                onChange={handleChange}
              />
              <p class="text-danger">{formErrors.city}</p>
            </div>
            <div className="mb-3">
              <label for="phonee" className="form-label">
                Contact number
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p class="text-danger">{formErrors.phone}</p>
            </div>
            
            <div className="d-grid gap-2 col-3 mx-auto">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
    </>
  );
};

export default Update;
