const Work = require('../models/work');

exports.createWork = (req, res, next) => {
    const workObject = (req.body);
    const work = new Work({
        ...workObject
    });

    work.save()
        .then(() => {
            res.status(201).json({ message: 'travail enregistré !', })
        })
        .catch(error => { res.status(400).json({ error }) })
};

exports.getOneWork = (req, res, next) => {
    Work.findOne({
        _id: req.params.id
    }).then(
        (work) => {
            res.status(200).json({
                status: 'success',
                data: work
            });
        }
    ).catch(
        (error) => {
            res.status(401).json({
                error: error
            });
        }
    );
};

exports.modifyWork = (req, res, next) => {
    const workObject = (req.body);
    Work.updateOne({ _id: req.params.id }, { ...workObject, _id: req.params.id })
        .then(() => res.status(200).json({
            status: 'Projet modifié !',
        }))
        .catch(error => res.status(401).json({ error }));
};

exports.deleteWork = (req, res, next) => {
    Work.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: 'Projet supprimé !' })
        })
        .catch(error => res.status(401).json({ error }));
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
                res.status(401).json({
                    error: error
                });
            }
        );
};