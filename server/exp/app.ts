'use strict'

import express from "express"
const app = express();
import cors from 'cors';
import router from './router';

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(router);

export default app