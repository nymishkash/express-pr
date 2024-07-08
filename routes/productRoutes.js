const router = require("express").Router();
const productControllers = require("../controllers/productController");

// create product

router.post("/", productControllers.createProduct);

// get route

router.get("/", productControllers.getallProducts);

// get product by id

router.get("/:id", productControllers.getById);

// update product

router.put("/:id", productControllers.updateProduct);

/// delete product

router.delete("/:id", productControllers.deleteProduct);


module.exports = router