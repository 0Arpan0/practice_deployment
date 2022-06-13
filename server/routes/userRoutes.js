const express = require('express')
const router = express.Router()
const {  authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser, } =  require('../controllers/userController.js')

router.route('/').post(registerUser).get(getUsers)


module.exports = router;