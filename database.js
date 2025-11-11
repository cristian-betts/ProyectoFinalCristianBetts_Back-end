// Importamos mongoose para conectarnos a la base de datos
import mongoose from 'mongoose';

// URL de conexión a tu base de datos.
const uri = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/{CristianBetts}";

// Función asíncrona para conectarse a la base de datos
export async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
  }
}
// Exportamos la función para usarla desde index.js
export default connectDB;
