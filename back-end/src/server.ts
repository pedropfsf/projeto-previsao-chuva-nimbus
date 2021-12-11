import express from 'express';
import router from './routes/api';
import cors from 'cors';

const app = express();
const PORT = 4444;

app.use("/api", router);

app.listen(PORT, () => console.log(`Server starting on port localhost:${PORT}`));