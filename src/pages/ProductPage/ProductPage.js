import React, { useContext, useEffect, useState } from 'react'
import "./productpage.css"
import { useNavigate, useParams } from "react-router-dom"
import { collection, onSnapshot, query, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import cartContext from '../../context/CartContext';

const ProductPage = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const cartc = useContext(cartContext);
  const userID = localStorage.getItem('user');

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setProduct(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  
  const addtocart = async () => {
    let prod = product;
    prod.productid = id;
    const docRef = await addDoc(collection(db, "cart", userID, "cart_item"), prod);
    alert("Added To Cart");
    cartc.update();
  }


  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='productdetails'>
      <div className="col">
        <div className="row">
          <img src={product.img} alt="" />
        </div>
        <div className="row">
          <h1>{product.name}</h1>
          <h2>₹: {product.price}</h2>
          <p><b>Desciption : </b> {product.desc}</p>
          <button onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage