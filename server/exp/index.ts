'use strict'

import express from "express"
const app = express();
import cors from 'cors';
import router from './router';
const PORT = 4000;
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(router);
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
})

