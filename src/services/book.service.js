const book = require('../model/bookSchema')

exports.NewBook = async (data) => {
    console.log(data);
    const newbook = new book(data)
    return await newbook.save()
}
exports.getAllBook = async (page, limit) => {
    const skip = (page - 1) * limit
    return await book.find().skip(skip).limit(limit)
}
exports.getSinlgeBook = async (id) => {
    return await book.findById(id)
}
exports.updateBook = async (id, data) => {
    return await book.findByIdAndUpdate(id, data, { new: true })
}
exports.deleteBook = async (id) => {
    return await book.findByIdAndDelete(id)
}