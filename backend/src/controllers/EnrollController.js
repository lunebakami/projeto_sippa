const Enroll = require('../models/Enroll');

module.exports = {
    async store(req,res){
        const { user_id, subject_id } = req.headers;

        const enroll = await Enroll.create({
            user: user_id,
            subject: subject_id,
            status: 1
        });

        await enroll.populate('subject').populate('user').execPopulate();

        return res.json(enroll);
    }
};