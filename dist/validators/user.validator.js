"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    email: zod_1.z.string().email('Invalid email format'),
    age: zod_1.z.number().min(18, 'Age must be at least 18'),
});
const validateUser = (req, res, next) => {
    try {
        req.body = userSchema.parse(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.validateUser = validateUser;
