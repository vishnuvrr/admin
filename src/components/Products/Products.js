import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    var data = await axios.get(
      "https://60ebd3abe9647b0017cdde6c.mockapi.io/product"
    );
    setProductData(data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let deleteProduct = async (id) => {
    let productDelete = window.confirm(
      "Are you sure you want to delete the product?"
    );
    if (productDelete) {
      try {
        let data = await axios.delete(
          `https://60ebd3abe9647b0017cdde6c.mockapi.io/product/${id}`
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
      console.log(id);
      let newProductData = productData.filter((ele) => {
        if (ele.id !== id) {
          return true;
        }
        return false;
      });
      console.log(newProductData);
      setProductData(newProductData);
    }
  };

  return (
    <div className="card shadow mb-4" style={{ margin: "30px" }}>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">PRODUCTS</h6>
      </div>
      <Link to="/products/create/">
        <button className="btn btn-primary" style={{ margin: "10px" }}>
          Create Product
        </button>
      </Link>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>quantity</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {isLoading ? (
                <h1>Loading ....</h1>
              ) : (
                productData.map((obj, index) => {
                  return (
                    <tr>
                      <td>{obj.id}</td>
                      <td>{obj.productName}</td>
                      <td>{obj.price}</td>
                      <td>{obj.quantity}</td>
                      <td>
                        <Link to={`products/edit/${obj.id}`}>
                          <button className="btn btn-primary">EDIT</button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteProduct(obj.id);
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
