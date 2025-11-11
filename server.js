import express from 'express';
import cors from 'cors';
import {connectDB} from './database.js';
import authRoutes from "./auth.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

//ruta base para la autenticación
app.use("/api/auth", authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})