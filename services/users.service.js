const { v4: uuidv4 } = require("uuid");
const { users } = require("../data-store/users.store");
const { getProductById } = require("./products.service");

const getUserById = (userId) => {
    const user = users.find((item) => item.userId === userId);
    if (!user) {
        throw Error(`Ooops, User not found!!`);
    }
    return user;
};

const isUserExist = (userId) => {
    const user = users.find((item) => item.userId === userId);
    if (!user) {
        return false;
    }
    return true;
};

const showUsers = () => {
    return users;
};

const createUser = (username, password, deposite, role) => {
    const deposites = [5, 10, 20, 50, 100];
    const roles = ["seller", "buyer"];
    const user = {
        userId: uuidv4(),
        username,
        password,
    };

    if (roles.includes(role)) {
        user.role = role;
        if (role === "seller") {
            user.deposite = null;
        } else {
            if (deposites.includes(deposite)) {
                user.deposite = deposite;
            } else {
                throw Error(`Can't deposite ${deposite} in the machine`);
            }
        }
    } else {
        throw Error(`${role} is not exist`);
    }

    users.push(user);
    return user;
};

const updateUser = (userId, updatedData) => {
    if (!isUserExist(userId)) {
        throw Error(`Can't update not existent user`);
    }
    const roles = ["seller", "buyer"];
    const index = users.findIndex((item) => item.userId === userId);
    if (roles.includes(updatedData.role)) {
        users[index] = { ...users[index], ...updatedData };
        return users[index];
    } else {
        throw Error(`${updatedData.role} is not exist`);
    }
};

const removeUser = (id) => {
    const index = users.findIndex((item) => item.userId === id);
    const user = users.splice(index, 1);
    return user;
};

const setDeposit = (userId, deposit) => {
    const deposites = [5, 10, 20, 50, 100];
    const user = getUserById(userId);
    if (user.role === "buyer") {
        if (deposites.includes(deposit)) {
            user.deposite = deposit;
            return deposit;
        } else {
            throw Error(`Can't deposite ${deposit} in the machine`);
        }
    } else {
        throw Error(`You are not a buyer!!`);
    }
};

const purchase = (userId, productId, productAmount) => {
    const receipt = {};
    const cart = [];
    const user = getUserById(userId);
    const product = getProductById(productId);
    if (user.role === "buyer") {
        if (productAmount <= product.amountAvailable) {
            receipt.totalSpent = productAmount * product.cost;
            cart.push(product.productName);
            receipt.purchasedProduct = [...cart];
            receipt.change = user.deposite - receipt.totalSpent;
            // TODO: subtract totalSpent from buyer deposite
            return receipt;
        } else {
            throw Error(`Can't complete your purchase`);
        }
    } else {
        throw Error(`You are not a buyer!!`);
    }
};

const reset = (userId) => {
    const user = getUserById(userId);
    if (user.role === "buyer") {
        user.deposite = 0;
    } else {
        throw Error(`You are not a buyer!!`);
    }
};

module.exports = {
    getUserById,
    showUsers,
    createUser,
    updateUser,
    removeUser,
    setDeposit,
    purchase,
    reset,
};
