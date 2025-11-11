// Importamos mongoose para conectarnos a la base de datos
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

// Función asíncrona para conectarse a la base de datos
export async function connectDB() {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
  }
}
// Exportamos la función para usarla desde index.js
export default connectDB; mongoose;
