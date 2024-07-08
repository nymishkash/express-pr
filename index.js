const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config({path : './config/.env'});


app.use(express.json());

mongoose
  .connect(process.env.CLUSTER_PATH)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });


  app.use('/api/products' , productRoutes)




// Create



app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});