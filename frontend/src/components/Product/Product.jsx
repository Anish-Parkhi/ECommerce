import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import styles from "./Product.module.css";
// import Cart from "../Cart/Cart";
function Product() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const id = location.state.id;
  useEffect(() => {
    axios
      .get(`https://backendshopcart-production.up.railway.app/products/${id}`)
      // .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleClick = () => {
    // toggle Modal
    setShow(true);
    if (posts.length === 0) {
      return; // Do not proceed if posts data is not available yet
    }
    const newItem = {
      name: posts.product,
      price: posts.price,
      quantity: count,
      url: posts.url,
    };
    axios
      .post("https://backendshopcart-production.up.railway.app/cart", newItem, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className={styles.productContainer}>
        <div className={styles.productContainerImgDiv}>
          <img className={styles.productContainerImg} src={posts.url} />
        </div>
        <div className={styles.productContainerContent}>
          <div className={styles.productContainerHeading}>{posts.product}</div>
          <div className={styles.productContainerDescription}>
            {posts.description}
          </div>
          <hr />
          <div className={styles.productContainerPrice}> ₹ {posts.price}</div>
          <div style={{ fontSize: "0.8rem" }}>
            6 months EMI options avalible on SBI Credit Cards
          </div>
          <hr />
          <div className={styles.productContainerCounter}>
            <div
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
            >
              <RemoveIcon />
            </div>
            <div style={{ fontSize: "1.3rem" }}>{count}</div>
            <div
              onClick={() => setCount((prev) => (prev < 10 ? prev + 1 : prev))}
            >
              <AddIcon />
            </div>
          </div>
          <div className={styles.productContainerButtons}>
            {/* modal area */}
            <button onClick={handleClick} style={{ marginLeft: "1rem" }}>
              Add to Cart
            </button>
            <div className={styles.productContainerBagIcon}>
              <ShoppingBagIcon style={{ fontSize: "3rem" }} />
              <div style={{ marginTop: "0.3rem", marginLeft: "0.2rem" }}>
                <div>Return Policy</div>
                <div>reuturn the item with 10 days of delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal component */}
      <Modal onClose={() => setShow(false)} show={show} />
    </>
  );
}
export default Product;
