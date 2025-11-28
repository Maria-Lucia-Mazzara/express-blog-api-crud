
function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
        message: 'You are a duck',
    });
};
module.exports = errorsHandler;