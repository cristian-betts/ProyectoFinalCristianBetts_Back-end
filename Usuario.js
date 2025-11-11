import mongoose from 'mongoose';

const usuarioShema = new mongoose.Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true }, 
    contraseña: { type: String, required: true}
});

export default mongoose.model("Usuario", usuarioShema);