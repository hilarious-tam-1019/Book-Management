const homeView = (req,res) => {
    res.render('index', { title: 'Home Page', books})
}

module.exports = homeView