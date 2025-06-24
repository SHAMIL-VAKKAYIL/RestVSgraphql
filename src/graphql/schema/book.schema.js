const { gql } = require('graphql-tag')

module.exports = gql`
    type Book{
        name:String!,
        price:Float!,
        genre:String!
    }

    type Query{
        books(page:Int,limit:Int):[Book]
        book(id:ID!):Book
    }

    type Mutation{
        createBook(name:String!,price:Float!,genre:String!):Book!
        updateBook(id:ID!,name:String,price:Float,genre:String):Book!
        deleteBook(id:ID!):Book!
    }
`