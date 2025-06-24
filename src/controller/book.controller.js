const bookService = require('../services/book.service')

exports.NewBook = async (req, res) => {
    console.log(req.body);
    try {
        const book = await bookService.NewBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        console.log(err)
    }
}

exports.getAllBook = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query
        const books = await bookService.getAllBook(page, limit)
        res.status(200).json(books)
    } catch (err) {
        console.log(err);

    }
}

exports.getSinlgeBook = async (req, res) => {
    try {
        const book = await bookService.getSinlgeBook(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        console.log(err);

    }
}

exports.updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body)
        if (!updated) return res.status(404).send('Book not found')
        res.status(201).json(book);
    } catch (err) {
        console.log(err);
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req.params.id)
        res.status(201).json(book);
    } catch (err) {
        console.log(err);

    }
}