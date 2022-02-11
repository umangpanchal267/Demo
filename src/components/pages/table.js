import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button type="button" className="btn btn-info me-md-2">
              View
            </button>
            <Link type="button" exact to="/update" className="btn btn-success me-md-2">
              Update
            </Link>
            <button type="button" className="btn btn-danger me-md-2">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <button type="button" className="btn btn-info me-md-2">
              View
            </button>
            <button type="button" className="btn btn-success me-md-2">
              Update
            </button>
            <button type="button" className="btn btn-danger me-md-2">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>thor@gmail.com</td>
          <td>
            <button type="button" className="btn btn-info me-md-2">
              View
            </button>
            <button type="button" className="btn btn-success me-md-2">
              Update
            </button>
            <button type="button" className="btn btn-danger me-md-2">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
