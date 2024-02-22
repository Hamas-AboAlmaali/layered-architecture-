const {
    showUsers,
    createUser,
    updateUser,
    removeUser,
    setDeposit,
    purchase,
    reset,
} = require("../services/users.service");

const getUsers = (req, res, next) => {
    res.send(showUsers());
};

const postUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const deposite = req.body.deposite;
    const role = req.body.role;

    try {
        const createdUser = createUser(username, password, deposite, role);
        res.send(createdUser);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const patchUser = (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = updateUser(userId, req.body);
        res.send(user);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const deleteUser = (req, res, next) => {
    const userId = req.params.id;

    try {
        const deletedUser = removeUser(userId);
        res.send(deletedUser);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const depositAmount = (req, res, next) => {
    const userId = req.body.userId;
    const depositValue = req.body.deposit;
    try {
        const deposit = setDeposit(userId, depositValue);
        res.status(200).json({ deposit });
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const buyProducts = (req, res, next) => {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const productAmount = req.body.productAmount;

    try {
        const receipt = purchase(userId, productId, productAmount);
        res.send(receipt);
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

const resetDeposit = (req, res, next) => {
    const userId = req.body.userId;
    try {
        res.send(reset(userId));
    } catch (e) {
        res.status(400).json({
            errorMessage: e.message,
        });
    }
};

module.exports = {
    getUsers,
    postUser,
    patchUser,
    deleteUser,
    depositAmount,
    buyProducts,
    resetDeposit,
};
