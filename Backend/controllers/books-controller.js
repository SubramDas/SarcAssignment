const Book=require("../model/Book");
const { get } = require("../routes/book-routes");

const getAllBooks = async(req, res, next)=>{
    let books;
    //for server site case we always use try 
    try{
        books=await Book.find();
    } catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message: "No Books Found"})
    }
    return res.status(200).json({ books })
}

const getById = async(req, res, next)=>{
    const id=req.params.id
    let book;
    try{
        book= await Book.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message: "No Books Found"})
    }
    return res.status(200).json({ book })

}

const addBooks=async(req, res, next)=>{
    let book;
    const {name, author,desc, price, available, image}=req.body;
    try{
        book= new Book({
            name,
            author, desc,
            price, available, image
        })
        await book.save();
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(500).json({message: "Cannot Add"})
    }

    return res.status(201).json({ book })
}

const updateBook = async(req, res, next)=>{
    const id= req.params.id
    const {name, author,desc, price, available, image}=req.body;
    let book
    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author, desc, price, available, image
        })
        book =await book.save()
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.status(404).json({message: "Cannot Update"})
    }
    return res.status(200).json({ book })
}

const deleteBook=async(req, res, next)=>{
    const id=req.params.id;
    let book;
    try{
        book= await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message: "Cannot Delete"})
    }
    return res.status(200).json({ message:"Book Successfully Deleted" })
}

exports.getAllBooks = getAllBooks
exports.addBooks = addBooks
exports.getById=getById
exports.updateBook=updateBook
exports.deleteBook=deleteBook

