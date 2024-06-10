import express from 'express';
import {
  test,
  updateUser,
} from '../Controllers/user.controller.js';
import { verifyToken } from '../Util/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);

export default router;