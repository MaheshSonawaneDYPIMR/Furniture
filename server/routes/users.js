import express from "express";
import { register, verify,login, logout } from "../controllers/users.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();
router.route('/register').post(register)
router.route('/verify').post(isAuthenticated , verify)

router.route('/login').post( login)
router.route('/logout').get(logout)



export default router;