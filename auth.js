import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from './Usuario.js';

const router = express.Router();

//registro (mediante método post)

router.post("/register", async (req, res) => {
    try {
        const {nombre, email, contraseña} = req.body;
        const existente = await Usuario.findOne( { email } );
        if (existente) {
            return res.status(400).json({mensaje: 'El usuario ya existe'});
        }
        const hash = await bcrypt.hash(contraseña, 10);
        const nuevo = new Usuario({nombre, email, contraseña: hash});
        await nuevo.save();
        res.json({mensaje: 'Usuario registrado correctamente'});
    } catch (err) {
        res.status(500).json({mensaje: err.message});
    }
});

//Login (al igual que el anterior, con método post)

router.post("/login", async (req, res) => 
{
    try {
        const {email, contraseña} = req.body;
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({mensaje: "Usuario no encontrado"});
        }
        const esValida = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!esValida) {
            return res.status(400).json({mensaje: "Contraseña incorrecta"});
        }
        const token = jwt.sign({id: usuario._id}, "clave_secreta", {expiresIn: "2h"});
        res.json({mensaje: "Inicio de sesión exitoso", token});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

export default router;