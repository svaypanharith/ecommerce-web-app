import { Router } from 'express';
import storageController from '../controllers/storage.controller';

const router = Router();

router.get('/', storageController.getAll);
router.get('/:id', storageController.getById);
router.post('/', storageController.create);
router.put('/:id', storageController.update);
router.delete('/:id', storageController.delete);

export default router;
