const Subject = require("../models/Subject");

module.exports = {
  async store(req, res) {
    const { cod, name } = req.body;

    console.log(cod, name);

    let subject = await Subject.findOne({ cod });

    console.log(subject);

    if (!subject) {
      subject = await Subject.create({
        cod,
        name
      });
    }

    console.log(subject);

    return res.json({ subject });
  },

  async show(req, res) {
    const subjects = await Subject.find({});

    return res.json(subjects);
  },

  async index(req, res) {
    const { cod } = req.body;

    const subject = await Subject.findOne({ cod });

    return res.json({ subject });
  }
};
