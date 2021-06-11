import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clothingSchema = new Schema
({
   Name: String,
   Brand: String,
   Category: String,
   Color: String,
   Size: String,
   Price: Number
},
{
    collection: "clothing"
});

const Model = mongoose.model("clothing", clothingSchema);
export default Model;