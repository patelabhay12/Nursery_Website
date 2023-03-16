
import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
const mongoose = require("mongoose");


const handler = async (req, res) => {
    let products = await Product.find();
    res.status(200).json({ products });
}

mongoose.models = {};
export default connectDb(handler);