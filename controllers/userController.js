const User = require('../models/Users')

//create a new user
const createUser = async (req, res) => {
  const user = req.body
  try {
    const newUser = await User.query().insert(user)
    res.status(201).json({
      status: 'OK',
      user: newUser,
    })
  } catch (err) {
    res.status(500).json({
      status: 'NULL',
      message: err.message,
    })
  }
}

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.query()
    console.log(users.length)
    res.status(201).json({
      user: users,
    })
  } catch (err) {
    res.status(500).json({
      status: 'NULL',
      message: err.message,
    })
  }
}

//get a single user
const getSingleUser = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await User.query().findById(userId)
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({
      status: 'NULL',
      message: err.message,
    })
  }
}

//update a user
const updateUser = async (req, res) => {
  const userId = req.params.id
  try {
    const { username, email, password } = req.body
    const user = await User.query().findById(userId).patch({
      username: username,
      email: email,
      password: password,
    })

    res.status(201).json({ message: 'User details updated succssfully' })
  } catch (err) {
    res.status(500).json({
      status: 'NULL',
      message: err.message,
    })
  }
}

//delete a user
const deleteUser = async (req, res) => {
  const userId = req.params.id
  try {
    await User.query().deleteById(userId)
    res.status(201).json({ message: 'user deleted successfully' })
  } catch (err) {
    res.status(500).json({
      status: 'NULL',
      message: err.message,
    })
  }
}
module.exports = { createUser, getAllUsers, getSingleUser, updateUser, deleteUser }
