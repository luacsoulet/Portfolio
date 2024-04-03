const Work = require('../models/work');

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