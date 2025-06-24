const { Query } = require('mongoose')
const bookService = require('../../services/book.service')

module.exports = {
    Query: {
        books: async (_, args) => {
            let page = args.page
            let limit = args.limit

            return await bookService.getAllBook(page, limit)
        },
        book: async (_, { id }) => {
            return await bookService.getSinlgeBook(id)
        }
    },
    Mutation: {
        createBook: async (_, args) => {
            return await bookService.NewBook(args)
        },
        updateBook: async (_, { id, ...data }) => {
            return await bookService.updateBook(id, data)
        },
        deleteBook: async (_,{id}) => {
            return await bookService.deleteBook(id)
        }
    }
}