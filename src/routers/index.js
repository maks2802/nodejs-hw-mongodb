import { Router } from 'express';
import contactsRoutes from './contacts.js';

const router = Router();

router.use(contactsRoutes);

export default router;
