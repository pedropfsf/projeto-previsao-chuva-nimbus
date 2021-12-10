import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

import { 
    getAll, 
    createDataClimate 
} from '../controllers/climate';

router.get("/getClimateAll", getAll);

router.post("/addDataClimate", bodyParser.json(), createDataClimate);

export default router;