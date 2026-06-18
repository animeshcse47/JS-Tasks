const Book = require("../models/Book")

exports.addBook = async (req, res) => {
    try {
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            price: req.body.price,
            coverImage: req.file ? req.file.path : ""
        })
        res.status(201).json({ success: true, book })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json({ success: true, count: books.length, books })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({ success: false, message: "Book not found" })
        res.status(200).json({ success: true, book })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!book) return res.status(404).json({ success: false, message: "Book not found" })
        res.status(200).json({ success: true, book })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) return res.status(404).json({ success: false, message: "Book not found" })
        res.status(200).json({ success: true, message: "Book deleted" })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}
