import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import img1 from "./girl.png";
import img2 from "./girl2.png";
function Home() {
  const [favorite, setFavourite] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState("");
  function handleClick(id) {
    setId(id);
    navigate("/product", { state: { id } });
  }
  useEffect(() => {
    axios
      .get("https://backendshopcart-production.up.railway.app/products")
      .then((res) => {
        setPosts(res.data);
        setFavourite(new Array(res.data.length).fill(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //useEffect to add products to wishlist

  useEffect(() => {
    for (let i = 0; i < favorite.length; i++) {
      if (favorite[i]) {
        axios
          .post(
            "https://backendshopcart-production.up.railway.app/wishlist",
            posts[i]
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [posts, favorite]);

  //logic to implement smooth scroll
  const scrollRef = useRef(null);
  const data = [
    {
      id: 1,
      headline: "Grab Upto 50% off on all headphones",
      url: "https://www.google.com/search?q=google+brad&rlz=1C1VDKB_enIN1063IN1063&oq=goog&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNDEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
      image: img1,
    },
    {
      id: 2,
      headline: "Get no cost EMI on selected Cards",
      url: "https://www.npmjs.com/package/react-material-ui-carousel",
      image: img2,
    },
  ];

  const enableScroll = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.posterContainerWrapper}>
        <Carousel sx={{ width: "100%", height: "20rem" }}>
          {data.map((item) => (
            <>
              <div key={item.id} style={{ display: "flex" }}>
                <div className={styles.posterContainer}>
                  <p className={styles.posterContainerHeadline}>
                    {item.headline}
                  </p>
                  <button
                    onClick={enableScroll}
                    id="scrollButton"
                    className={styles.posterContainerButton}
                  >
                    Buy Now
                  </button>
                </div>
                <div style={{ marginLeft: "auto", flexBasis: "2" }}>
                  <img
                    style={{
                      objectFit: "cover",
                      padding: "0.6rem",
                      // marginTop: "auto",
                    }}
                    className={styles.posterContainerImage}
                    src={item.image}
                  />
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>

      {/* card view */}
      <div ref={scrollRef} id="target" className={styles.baap}>
        {posts?.map((item, index) => {
          return (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.cardContainer}>
                {favorite[index] ? (
                  <FavoriteIcon
                    style={{ marginLeft: "auto", padding: "0.7rem" }}
                    className={styles.cardContainerFavIcon}
                    onClick={() => {
                      const updatedFavioutes = [...favorite];
                      updatedFavioutes[index] = !favorite[index];
                      setFavourite(updatedFavioutes);
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    style={{ marginLeft: "auto", padding: "0.7rem" }}
                    className={styles.cardContainerFavIcon}
                    onClick={() => {
                      const updatedFavioutes = [...favorite];
                      updatedFavioutes[index] = !favorite[index];
                      setFavourite(updatedFavioutes);
                    }}
                  />
                )}
                <div style={{ textAlign: "center" }}>
                  <img
                    // onClick={() => handleClick(item._id)}
                    className={styles.cardContainerImg}
                    src={item.url}
                  />
                </div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardFooterHeadingDiv}>
                  <div>{item.product}</div>
                  <div style={{ marginLeft: "auto", fontWeight: "600" }}>
                    ₹ {item.price}
                  </div>
                </div>
                <div className={styles.cardFooterDescription}>
                  <div>{item.description}</div>
                  <button
                    onClick={() => handleClick(item._id)}
                    className={styles.cardFooterButton}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
Home.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Home;
