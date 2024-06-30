import { Router } from 'express';
import { checkServer, identifyUser } from '../controllers/identityController';

const router = Router();

router.get('/', checkServer);
router.post('/', identifyUser)

export default router;
