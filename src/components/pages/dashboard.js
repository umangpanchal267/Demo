import React from "react";
import Navbar from "../layouts/navbar";
import Table from "./table";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="py-4">
          <div className="text-center">
            <h1>User Table</h1>
          </div>
          <Table />
        </div>
      </div>
      </>
  );
};

export default Dashboard;
