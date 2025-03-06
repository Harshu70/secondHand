import Book from "../model/book.model.js";

export const updateVerification = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book verified successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating verification:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
