import Book from "../model/book.model.js";

const buyBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);    
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Error fetching buy book data" });
  }
};

export default buyBook;
