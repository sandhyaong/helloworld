"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const errorMiddleware = (err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            success: false,
            errors: err.errors.map(e => ({
                field: e.path.join('.'),
                message: e.message,
            })),
        });
    }
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
};
exports.default = errorMiddleware;
