import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import StripeContainer from "../Stripe/StripeContainer";
import styles from "./Cart.module.css";
import cart from "./emptyCart.png";

function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showitem, setShowitem] = useState(false);
  useEffect(() => {
    axios
      .get("https://backendshopcart-production.up.railway.app/cart")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://backendshopcart-production.up.railway.app/${id}`)
      .then(() => {
        setData(data.filter((item) => item._id !== id));
        console.log("Item deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let subTotal = 0;
  return (
    <>
      {showitem ? (
        <StripeContainer />
      ) : (
        <>
          <Navbar />
          <div className={styles.checkoutContainer}>
            {data.length === 0 ? (
              <div className={styles.checkoutContainerEmptyCart}>
                <img style={{ width: "30%" }} src={cart} />
                <div style={{ fontSize: "1.5rem", marginTop: "1.5rem" }}>
                  Cart is Empty
                </div>
                <button
                  className={styles.checkoutContainerShopNow}
                  onClick={() => navigate("/")}
                >
                  Shop Now !
                </button>
              </div>
            ) : (
              <>
                {data.map((item) => {
                  const total = item.quantity * item.price;
                  subTotal = subTotal + total;
                  return (
                    <div
                      key={item._id}
                      className={styles.checkoutContainerItem}
                    >
                      <div className={styles.checkoutContainerImage}>
                        <img
                          style={{ width: "50%", borderRadius: "1rem" }}
                          src={item.url}
                        />
                      </div>
                      <div className={styles.checkoutContainerInnerDiv}>
                        <div className={styles.checkoutContainerProductName}>
                          {item.name}
                          <DeleteIcon
                            style={{ marginLeft: "2rem", fontSize: "1.7rem" }}
                            onClick={() => handleDelete(item._id)}
                          />
                        </div>
                        <div
                          className={styles.checkoutContainerProductQuantity}
                        >
                          Quantity: {item.quantity}
                        </div>
                        <div className={styles.checkoutContainerProductPrice}>
                          Price: ₹{item.price}
                        </div>
                        <div className={styles.checkoutContainerProductTotal}>
                          Total: ₹{total}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className={styles.checkoutContainerSubtotal}>
                  Subtotal: ₹{subTotal}
                </div>
                <div className={styles.checkoutContainerCheckout}>
                  <button
                    onClick={() => setShowitem(true)}
                    className={styles.checkoutContainerButton}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
