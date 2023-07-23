const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./Models/product");
const CartItem = require("./Models/cart");
const Wishlist = require("./Models/wishlist");
require("dotenv").config();
const stripe = require("stripe")("sk_test_51NPiprSCc9IYYaIDSfwMsEdD0ZPyEpMugkOKU2rtWjGihRVxDHzrmqDIxVv0pd16YNgVnvQ0COqm5wZQKUfV46d800Qy4BBASC");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT||3000;
app.use(cors());
//{ origin: true, credentials: true }
app.use(express.json());
mongoose.connect(
  "mongodb+srv://root:root@ecomm.umpyy4z.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  }
);

// Event handler for successful connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event handler for connection error
mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Get all products
app.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Get a single product by ID
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    })
    .catch((error) => {
      console.error("Error retrieving product:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.post("/cart", (req, res) => {
  const { name, quantity, price, url } = req.body;

  const newItem = new CartItem({ name, quantity, price, url });

  newItem
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((error) => {
      console.error("Error saving item:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.get("/cart", (req, res) => {
  CartItem.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.error("Error retrieving items:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.delete("/cart/:id", (req, res) => {
  const itemId = req.params.id;
  CartItem.findByIdAndDelete(itemId)
    .then(() => {
      res.status(200).json({ message: "Item deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

//wishlist routes

app.post("/wishlist", (req, res) => {
  const { product, description, url, price } = req.body;
  const wishlistItem = Wishlist({ product, description, url, price });
  wishlistItem
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/wishlist", (req, res) => {
  Wishlist.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.error("Error retrieving items:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.delete("/wishlist/:id", (req, res) => {
  const itemId = req.params.id;
  Wishlist.findByIdAndDelete(itemId)
    .then(() => {
      res.status(200).json({ message: "Item deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});
app.get("/sample", (req, res) => {
  res.status(200).send("This is a sample response");
});
//payment route

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Order placed for products",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

const http = require('http')
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
