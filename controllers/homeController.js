const homeView = (req,res) => {
    const books = [                      
         { title: 'gay', author: 'Tam', date: '11/1/2001', category: 'Mystery' , vote: '10'}
    ]
    res.render('index', { books })
}

module.exports = homeView