const express = require("express")
const multer = require("multer")
const { addBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controller/bookController")

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
})

const upload = multer({ storage })

const router = express.Router()

router.post("/add", upload.single("coverImage"), addBook)
router.get("/", getAllBooks)
router.get("/:id", getBookById)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

module.exports = router
