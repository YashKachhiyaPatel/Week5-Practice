import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clothingSchema = new Schema
({
   name: String,
   brand: String,
   category: String,
   color: String,
   size: String,
   price: Number
},
{
    collection: "clothing"
});

const Model = mongoose.model("clothing", clothingSchema);
export default Model;