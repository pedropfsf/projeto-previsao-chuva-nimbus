import express from 'express';
const router = express.Router();

import { getAll } from '../controllers/climate';

router.get("/getClimateAll", getAll);

export default router;