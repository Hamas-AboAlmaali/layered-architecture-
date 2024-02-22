const { v4: uuidv4 } = require('uuid');
const { users } = require("./users.store")

const products = [
    {
        productId: uuidv4(),
        sellerId: users[0].userId,
        productName: "Big Cola",
        cost: 20,
        amountAvailable: 5
    },
    {
        productId: uuidv4(),
        sellerId: users[0].userId,
        productName: "Spero Spatse",
        cost: 10,
        amountAvailable: 4
    },
    {
        productId: uuidv4(),
        sellerId: users[1].userId,
        productName: "V7",
        cost: 5,
        amountAvailable: 7
    },
    {
        productId: uuidv4(),
        sellerId: users[1].userId,
        productName: "Zabadoo",
        cost: 5,
        amountAvailable: 7
    }
]

exports.products = products