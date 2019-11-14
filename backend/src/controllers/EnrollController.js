const Enroll = require('../models/Enroll');

module.exports = {
    async store(req,res){
        const { user_id, subject_id } = req.body;

        console.log(user_id,subject_id);

        const enroll = await Enroll.create({
            user: user_id,
            subject: subject_id,
            status: 1
        });

        await enroll.populate('subject').populate('user').execPopulate();

        return res.json(enroll);
    },

    async show(req, res){
        const enroll = await Enroll.find({});

        return res.json({enroll});
    }
};