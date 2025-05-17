"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'User created successfully!',
        data: req.body,
    });
};
exports.createUser = createUser;
