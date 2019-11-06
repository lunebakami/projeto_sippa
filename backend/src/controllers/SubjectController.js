const Subject = require('../models/Subject');

module.exports = {
    async store(req,res){
        const { cod, name } = req.body;

        let subject = await Subject.findOne({ cod });

        if(!subject){   
            const subject = await Subject.create({
                cod,
                name,
            });
        }

        return res.json({ subject });
    },

    async show(req, res){
        const subjects = await Subject.find({});

        return res.json(subjects);
    }
}