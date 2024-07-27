class HomeController {
    // [GET] /
    home(req, res, next) {
        res.json({
            title: 'main of home page',
            status: '200',
        });
    }
}

module.exports = new HomeController();
