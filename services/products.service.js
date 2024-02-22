const { v4: uuidv4 } = require('uuid');
const { products } = require("../data-store/products.store")
const { getUserById } = require('./users.service');

const getProductById = (productId) => {
    const product = products.find(item => item.productId === productId)
    if (!product) {
        throw Error(`Ooops, Product not found!!`);
    }
    return product
}

const isProductExist = (productId) => {
    const product = products.find(item => item.productId === productId)
    if (!product) {
        return false
    }
    return true
}

const showProducts = () => {
    return products
}

const createProduct = (sellerId, productName, cost, amountAvailable) => {
    if (cost < 0) {
        throw Error(`You can't add negative number for cost`);
    }

    const user = getUserById(sellerId)
    const product = {
        productId: uuidv4(),
        productName,
        cost,
        amountAvailable
    }

    if (user.role === "seller") {
        product.sellerId = user.userId
        products.push(product)
        return product
    } else {
        throw Error(`You are a buyer so that you can't create a product`);
    }
}

const updateProduct = (userId, productId, updatedData) => {
    const user = getUserById(userId)
    const index = products.findIndex(item => item.productId === productId)

    if (user.role === "seller") {
        if (user.userId === products[index].sellerId) {
            products[index] = { ...products[index], ...updatedData }
            return products[index]
        } else {
            throw Error(`This product is not belong to you`);
        }

    } else {
        throw Error(`You are a buyer so that you can't update a product`);
    }
}

const removeProduct = (userId, productId) => {
    if (!isProductExist(productId)) {
        throw Error(`Product is not exist`);
    }

    const user = getUserById(userId)
    const index = products.findIndex(item => item.productId === productId)

    if (user.role === "seller") {
        if (user.userId === products[index].sellerId) {
            const product = products.splice(index, 1)
            return product
        } else {
            throw Error(`This product is not belong to you`);
        }

    } else {
        throw Error(`You are a buyer so that you can't delete a product`);
    }
}

module.exports = { showProducts, createProduct, updateProduct, removeProduct, getProductById }