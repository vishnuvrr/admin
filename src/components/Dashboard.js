import React from "react";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="mt-5">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">USERS</h5>
            <p class="card-text">
              Click the below link to go to user database. Create ,edit and
              delete users in the users page
            </p>
            <Link to="/users">USERS</Link>
          </div>
        </div>

        <div class="card mt-5" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">PRODUCTS</h5>
            <p class="card-text">
              Click the below link to go to product database.Create ,edit and
              delete products in the products page
            </p>
            <Link to="/products">PRODUCTS</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
