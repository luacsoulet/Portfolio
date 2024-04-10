const Work = require('../models/work');

exports.createWork = (req, res, next) => {
    const workObject = (req.body);
    if (!req.auth.userId) {
        res.status(403).json({ message: 'Not authorized' });
    } else {
        const work = new Work({
            ...workObject,
        });

        work.save()
            .then(() => {
                res.status(201).json({ message: 'travail enregistré !', })
            })
            .catch(error => { res.status(400).json({ error }) });
    }
};

exports.getOneWork = (req, res, next) => {
    Work.findOne({
        _id: req.params.id
    }).then(
        (work) => {
            res.status(200).json({ work });
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
    if (!req.auth.userId) {
        res.status(403).json({ message: 'Not authorized' });
    } else {
        Work.updateOne({ _id: req.params.id }, { ...workObject, _id: req.params.id })
            .then(() => res.status(200).json({
                status: 'Projet modifié !',
            }))
            .catch(error => res.status(401).json({ error }));
    }
};

exports.deleteWork = (req, res, next) => {

    if (!req.auth.userId) {
        res.status(403).json({ message: 'Not authorized' });
    } else {
        Work.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({ message: 'Projet supprimé !' })
            })
            .catch(error => res.status(401).json({ error }));
    }
};

exports.getAllWorks = (req, res, next) => {
    Work.find()
        .then(
            (works) => {
                res.status(200).json({ works })
            }
        ).catch(
            (error) => {
                res.status(401).json({
                    error: error
                });
            }
        );
};