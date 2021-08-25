import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function EditProduct() {
  let id = useParams();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      quantity: "",
    },
    onSubmit: editProduct,
    validate: (values) => {
      let errors = {};
      if (!values.productName) {
        errors.productName = "required";
      }
      if (!values.price) {
        errors.price = "required";
      }
      if (!values.quantity) {
        errors.quantity = "required";
      }
      return errors;
    },
  });

  async function fetchData() {
    try {
      let data = await axios.get(
        `https://60ebd3abe9647b0017cdde6c.mockapi.io/product/${id.id}`
      );
      formik.setFieldValue("productName", data.data.productName);
      formik.setFieldValue("price", data.data.price);
      formik.setFieldValue("quantity", data.data.quantity);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function editProduct(values) {
    let productObj = values;
    console.log(productObj);
    try {
      let data = await axios.put(
        `https://60ebd3abe9647b0017cdde6c.mockapi.io/product/${id.id}`,
        productObj
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    history.push("/products");
    return false;
  }

  return (
    <div style={{ margin: "10px" }}>
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="productName" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            class="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productName}
            name="productName"
            id="productName"
          />
          {formik.touched.productName && formik.errors.productName ? (
            <div style={{ color: "red" }}>Required</div>
          ) : (
            ""
          )}
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            id="price"
          />
          {formik.touched.price && formik.errors.price ? (
            <div style={{ color: "red" }}>Required</div>
          ) : (
            ""
          )}
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">
            Quantity
          </label>
          <input
            type="text"
            class="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
            name="quantity"
            id="quantity"
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <div style={{ color: "red" }}>Required</div>
          ) : (
            ""
          )}
        </div>
        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
