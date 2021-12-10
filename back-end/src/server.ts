import express from 'express';

const app = express();
const PORT = 4444;

app.listen(PORT, () => console.log(`Server starting on port localhost:${PORT}`));