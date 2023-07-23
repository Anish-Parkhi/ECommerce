import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Wishlsit.module.css";
import img from "./broken-heart.png";
function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://backendshopcart-production.up.railway.app/wishlist")
      .then((res) => {
        setWishlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://backendshopcart-production.up.railway.app/${id}`)
      .then((res) => {
        console.log(res);
        setWishlist(wishlist.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className={styles.wishListContainer}>
        <div className={styles.wishListContainerHeader}>Wishlist</div>
        <hr className={styles.horizontalRule} />
        {wishlist.length === 0 ? (
          <div style={{ padding: "1rem" }}>
            <img style={{ width: "10rem", paddingTop: "0.5rem" }} src={img} />
            <div className={styles.wishListContainerNothinginContainer}>
              Nothing in WishList
            </div>
            <button
              className={styles.wishListContainerNothinginContainerButton}
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        ) : (
          <>
            {wishlist?.map((item, index) => {
              return (
                <div key={index} className={styles.wishListContainerCard}>
                  <div className={styles.wishListContainerImageDiv}>
                    <img
                      className={styles.wishListContainerImage}
                      src={item.url}
                    />
                  </div>
                  <div className={styles.wishListContainerSideDiv}>
                    <div style={{ fontSize: "2rem" }}>{item.product}</div>
                    <div style={{ fontSize: "1rem" }}>{item.description}</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                      ₹ {item.price}
                    </div>
                    <div>
                      Remove from wishlist{" "}
                      <DeleteIcon
                        onClick={() => handleDelete(item._id)}
                        style={{
                          fontSize: "1.4rem",
                          marginTop: "2.7rem",
                          marginLeft: "1rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Wishlist;
