const {User} = require('../models/users')

module.exports = {
    index: async (req, res) => {
        res.render('dashboard');
    }
}