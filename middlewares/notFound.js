

function notFound(req, res, next) {
    res.status(418)
    res.json({
        error: "Not Found",
        message: "I'm a teapot"
    });
}
module.exports = notFound;