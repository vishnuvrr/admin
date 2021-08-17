import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const history=useHistory();

  async function addProduct(event)
  {
    event.preventDefault();
    let productObj={productName,price,quantity};

    try{
      let data=await axios.post("https://60ebd3abe9647b0017cdde6c.mockapi.io/product",productObj);
      console.log(data);
    }
    catch(err)
    {
      console.log(err);
    }


    history.push("/products");



    return false;
  }

  return (
    <div style={{margin:"10px"}}>
      <form onSubmit={(e)=>addProduct(e)}>
        <div class="mb-3">
          <label for="productName" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            id="productName"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            id="price"
          />
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">
           Quantity
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            id="quantity"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
