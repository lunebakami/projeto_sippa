const User = require('../models/User');

module.exports = {

    async store(req, res){
        const { matricula, name, password, typeUser } = req.body;

        let user = await User.findOne({ matricula });
        if(!user){
            const user = await User.create({
                matricula,
                name,
                password,
                typeUser
            });
        }

        return res.json({ user });
    },

    async index(req,res){
        const { matricula, password } = req.body;
        console.log(req.body);

        let user = await User.findOne({ matricula, password });

        return res.json({ user });
    },
}