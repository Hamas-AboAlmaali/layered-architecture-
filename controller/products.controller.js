const {
    showProducts,
    createProduct,
    updateProduct,
    removeProduct,
} = require("../services/products.service");

const getProducts = (req, res, next) => {
    res.send(showProducts());
};

const postProduct = (req, res, next) => {
    const sellerId = req.body.sellerId;
    const productName = req.body.productName;
    const cost = req.body.cost;
    const amountAvailable = req.body.amountAvailable;

    try {
        const createdProduct = createProduct(
            sellerId,
            productName,
            cost,
            amountAvailable
        );
        res.send(createdProduct);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const patchProduct = (req, res, next) => {
    const sellerId = req.body.sellerId;
    const productId = req.params.productId;

    try {
        const product = updateProduct(sellerId, productId, req.body);
        res.send(product);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const deleteProduct = (req, res, next) => {
    const sellerId = req.body.sellerId;
    const productId = req.params.productId;

    try {
        const deletedProduct = removeProduct(sellerId, productId);
        res.send(deletedProduct);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

module.exports = { getProducts, postProduct, patchProduct, deleteProduct };
