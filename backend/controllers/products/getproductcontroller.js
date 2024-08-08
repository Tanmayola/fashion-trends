const mongoose = require("mongoose");
const ProductCollection = require("../../modules/ProductSchema");

const getproductcontroller = async (req, res) => {
  try {
    const { category, name, subcategory } = req.params;
    let products;

    if (category) {
      const searchcategory = category.toLowerCase();
      products = await ProductCollection.find({
        category: { $regex: new RegExp(searchcategory, "i") },
      });
    } else if (name) {
      const searchName = name.toLowerCase();
      products = await ProductCollection.find({
        name: { $regex: new RegExp(searchName, "i") },
      });
    }else if (req.path.includes('/random')){
      products = await ProductCollection.aggregate([
        {
          $sample: {
            size:9,
          },
        },
      ]);
    } 
    else if (req.path.includes('/top-rated')){
      products = await ProductCollection.find().short({rating:-1}).list(9);
    } 
    else if (req.path.includes('/lowtohigh')){
      products = await ProductCollection.find().short({rating:1}).list(9);
    }
    else if (subcategory) {
      const searchsubcategory = subcategory.toLowerCase();
      products = await ProductCollection.find({
        sub_category: { $regex: new RegExp(searchsubcategory, "i") },
      });
    }else if(id){
      products = await ProductCollection.find({
        _id:id,
      });
    } 
    else {
      products = await ProductCollection.find();
    }

    if (!products || products.length === 0) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send(products);
    console.log("Product fetched successfully");
  } catch (error) {
    res.status(504).send({
      message: "Error fetching products",
    });
    console.log(`Error occurred: ${error}`);
  }
};

module.exports = getproductcontroller;