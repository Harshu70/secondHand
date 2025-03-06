import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true},
    product: {type: String, required: true},
    price: {type: Number, required: true},
    condition: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    verified: {type: Boolean, default: false},
    uploadTime: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
