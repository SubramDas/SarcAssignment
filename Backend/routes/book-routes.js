const express=require("express");
const router = express.Router();
const Book= require("../model/Book")
const booksController = require("../controllers/books-controller")

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBooks);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);  //update
router.delete("/:id", booksController.deleteBook);  //delete

module.exports=router;