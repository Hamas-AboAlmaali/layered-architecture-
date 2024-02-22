const express = require("express");
const {
    getUsers,
    postUser,
    patchUser,
    deleteUser,
    depositAmount,
    buyProducts,
    resetDeposit,
} = require("../controller/users.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", postUser);
router.patch("/users/:id", patchUser);
router.delete("/users/:id", deleteUser);

router.post("/deposit", depositAmount);
router.post("/buy", buyProducts);
router.post("/reset", resetDeposit);

module.exports = router;
