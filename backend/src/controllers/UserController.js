const User = require('../models/User');

module.exports = {

    async store(req, res){
        const { matricula, name, password, typeUser } = req.body;

        const user = await User.findOne({ matricula });
        if(!user){
            user = await User.create({
                matricula,
                name,
                password,
                typeUser
            });
        }

        return res.json({ user });
    },

    async index(req,res){
        const { matricula } = req.body;

        const user = await User.findOne({matricula});

        return res.json({ user });

    },

    async show(req, res){
        const users = await User.find({});

        return res.json(users);
    }
}