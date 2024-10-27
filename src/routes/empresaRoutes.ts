import { Router } from 'express';
import empresaController from '../controllers/empresaController';

const router = Router();

router.post('/', empresaController.create);
router.get('/', empresaController.getAll);
router.get('/:cnpj', empresaController.getByCNPJ);
router.put('/:id', empresaController.update);
router.delete('/:id', empresaController.delete);

export default router;