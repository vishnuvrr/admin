import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateProduct() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      quantity: "",
    },
    onSubmit: addProduct,
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
  console.log(formik.errors);

  async function addProduct(values) {
    let productObj = values;
    console.log(values);
    console.log(productObj);

    try {
      let data = await axios.post(
        "https://60ebd3abe9647b0017cdde6c.mockapi.io/product",
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
          Submit
        </button>
      </form>
    </div>
  );
}
