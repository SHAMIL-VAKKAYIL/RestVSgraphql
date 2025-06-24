const bookController = require('../controller/book.controller')

const router = require('express').Router()


router.post('/createBook', bookController.NewBook)
router.get('/getBook', bookController.getAllBook)
router.get('/singleBook/:id', bookController.getSinlgeBook)
router.put('/updateBook/:id', bookController.updateBook)
router.delete('/deleteBook/:id', bookController.deleteBook)


module.exports = router