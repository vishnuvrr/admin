import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useHistory,
  useParams
} from "react-router-dom";



export default function EditProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  let id=useParams();
  const history=useHistory();
  async function fetchData()
  {
    try{
      let data=await axios.get(`https://60ebd3abe9647b0017cdde6c.mockapi.io/product/${id.id}`);
      console.log(data);
      setProductName(data.data.productName);
      setPrice(data.data.price);
      setQuantity(data.data.quantity);

    }
    catch(err)
    {
      console.log(err);
    }
  }
  
  useEffect(()=>
  {
    fetchData();
  },[])

  async function editProduct(event)
  {
    event.preventDefault();
    let productObj={productName,price,quantity};
    console.log(productObj);

    try
    {
      let data=await axios.put(`https://60ebd3abe9647b0017cdde6c.mockapi.io/product/${id.id}`,productObj);
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
      <form onSubmit={(e)=>editProduct(e)}>
        <div class="mb-3">
          <label for="productName" class="form-label">
            Username
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
          Update
        </button>
      </form>
    </div>
  );
}
