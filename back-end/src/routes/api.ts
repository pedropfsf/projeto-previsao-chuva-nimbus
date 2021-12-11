import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const router = express.Router();

import { 
    getAll, 
    createDataClimate 
} from '../controllers/climate';

router.use(cors());
router.get("/getClimateAll", getAll);
router.post("/addDataClimate", bodyParser.json(), createDataClimate);

export default router;