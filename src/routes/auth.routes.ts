import { Router } from 'express';
import { AuthController } from '../controllers';

const router = Router();
const authController = new AuthController();

router.post('/register', (req, res) => authController.register(req, res));

export default router;
