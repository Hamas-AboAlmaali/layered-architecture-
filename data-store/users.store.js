const { v4: uuidv4 } = require('uuid');

const users = [
    {
        userId: uuidv4(),
        username: "Hamas Ahmed",
        password: "hamas1234455",
        role: "seller",
        deposite: null
    },
    {
        userId: uuidv4(),
        username: "Ali Gamal",
        password: "ali-dnjebfh",
        role: "seller",
        deposite: null
    },
    {
        userId: uuidv4(),
        username: "Ahmed Mamdouh",
        password: "mamdouh123",
        role: "buyer",
        deposite: 0
    },
    {
        userId: uuidv4(),
        username: "Mohammed Ashraf",
        password: "mohammed1234",
        role: "buyer",
        deposite: 0
    }
]

exports.users = users