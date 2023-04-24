import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true },
  desc: { type: String, required: true },
  cat: { type: String, required: true },
  count: { type: Number, required: true },
  image: { type: String, required: true },
});


export default mongoose.model('Product',productSchema)
