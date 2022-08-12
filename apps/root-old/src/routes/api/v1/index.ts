import { Router } from 'express';
import { register } from './auth/register.js';
import { logout } from './auth/logout.js';
import { login } from './auth/login.js';
import { username, email } from './auth/is-available.js';

const router = Router();

router.get('/is-available/email', email);
router.get('/is-available/username', username);
router.all('/logout', logout);
router.post('/register', register);
router.post('/login', login);

export { router as v1ApiRouter };
