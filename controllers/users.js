const users = require('../models/users');

const index = (req,res) => {
    res.render('users/index.ejs', { users });
}

const signup = (req,res) => {
    res.render('users/signup.ejs');
}

const createUser = (req,res) => {
    const uuid = new Date().valueOf();
    req.body.uuid = uuid;
    users.push(req.body);
    res.redirect('/users');
}

module.exports = {
    index,
    signup,
    createUser,
}