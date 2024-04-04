const Work = require('../models/work');

exports.createWork = (req, res, next) => {
    const workObject = (req.body.work);
    const work = new Work({
        ...workObject
    });

    work.save()
        .then(() => { res.status(201).json({ message: 'travail enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })
};

exports.getAllWorks = (req, res, next) => {
    Work.find()
        .then(
            (works) => {
                res.status(200).json({
                    status: 'success',
                    results: works.length,
                    data: {
                        works
                    }
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
};