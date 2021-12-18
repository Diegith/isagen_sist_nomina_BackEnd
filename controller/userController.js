import Usuario from '../models/userSchema.js'

export const getUsers = async (req, res)  => {    
    try{
        let usuario = await Usuario.find();
        res.json(usuario);
    }catch(error){
        res.json({ message: error.message });
    }
}

export const addUser = async (req, res)  => {    
    const usuario = req.body;
    const nuevoUsuario = new Usuario(usuario);

    try{
        await nuevoUsuario.save();
        res.json(nuevoUsuario);
    }catch(error){
        res.json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    const id = req.params.id;
    try{
        const usuario = await Usuario.findById(id);
        res.json(usuario);
    }catch{
        res.error({ message: error.message });
    }
}

export const editUser = async (req, res) => {
    const usuario = req.body;
    const editUser = new Usuario(usuario);

    try{
        await Usuario.updateOne({_id: req.params.id}, editUser);
        res.json(editUser);
    }catch(error){
        res.json({ message: error.message });

    }
}

export const deleteUser = async (req, res) => {
    try{
        await Usuario.deleteOne({_id: req.params.id});
        res.json("Usuario eliminado con exito");
    }catch(error){
        res.json({message: error.message});
    }
}