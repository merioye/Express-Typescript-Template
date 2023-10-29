import { Router } from 'express';
import { AuthController } from '../controllers';
import { catchAsyncError } from '../middlewares';

const router = Router();
const authController = new AuthController();

router.post(
  '/register',
  catchAsyncError((req, res) => authController.register(req, res)),
);

export default router;
