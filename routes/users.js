var express = require('express')
const UserController = require('../controllers/userController')
var router = express.Router()

/* GET users listing. */
router.get('/all', UserController.getAllUsers)
router.get('/:id', UserController.getSingleUser)
router.put('/update/:id', UserController.updateUser)
router.post('/new', UserController.createUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router
