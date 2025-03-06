import Book from "../model/book.model.js";

export const upload = async (req, res) => {
  try {
    const { name, phone, email, product, price, condition, category, description, image} = req.body;
    const data = new Book({
      name,
      phone,
      email,
      product,
      price,
      condition,
      category,
      description,
      image, 
      verified: false
    });
    await data.save();
    res.status(201).json({ message: "file uploaded successfully", file:{
        _id:data._id,
        name:data.name,
        phone:data.phone,
        email:data.email,
        product:data.product,
        price:data.price,
        condition:data.condition,
        category:data.category,
        description:data.description,
        image:data.image,
        verified: data.verified,
        uploadTime: data.uploadTime
      } });
  } catch (error) {
    console.log("error: upload, ", error.message);
    res.status(500).json({ message: "internal server eror" });
  }
};
