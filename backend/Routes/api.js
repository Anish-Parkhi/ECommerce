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

app.get("/sample", (req, res) => {
  res.json({ message: "This is a sample response" });
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
