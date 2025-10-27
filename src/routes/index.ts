import { Router } from 'express';
import storageRoutes from './storage.routes';
import colorRoutes from './color.routes';

const router = Router();

router.use('/storages', storageRoutes);
router.use('/colors', colorRoutes);

export default router;
