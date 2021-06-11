import express from 'express';
import { DisplayClothingListPage } from '../Controllers/clothing';
const router = express.Router();
export default router;

router.get('/', DisplayClothingListPage);

// display edit/:id page with/clothing-list/edit:id