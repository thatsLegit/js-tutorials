module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Expose-Headers", '*')
    res.header('Content-Range', 'posts 0-20/20')
    next()
}