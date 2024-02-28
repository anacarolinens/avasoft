const User = require('../models/user');

//Crud all users
exports.getAllUsers = async (req, res, next) => {
   User.findAll()
    .then(users => {
        res.status(200).json({ users: users });
    })
    .catch(err => {
        res.status(500).send('Error -> ' + err);
    });
}

//Get user by id
exports.getUserById = async (req, res, next) => {
    const userId = req.params.id;
    User.findByPk(userId)
    .then(user => {
       if (!user) {
           return res.status(404).json({ message: 'User Not Found' });
       }
       res.status(200).json({ user: user });
    })
    .catch(err => {
        res.status(500).json({ message: 'Error -> ' + err });
    });
}

//Create user
exports.createUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.create ({
        name: name,
        email: email,
        password: password
    })
    .then(user => {
        res.status(200).json({ 
            message: 'User created successfully!', 
            user: user });
    })
    .catch(err => {
        res.status(500).json({ 
            message: 'Error -> ' + err });
    });
}

//Update user
exports.updateUser = async (req, res, next) => {
    const userId = req.params.id;
    const updatedname = req.body.name;
    const updatedemail = req.body.email;
    const updatedpassword = req.body.password;
    User.findByPk(userId)
    .then(user => {
        if (!user) {
            return res.status(404).json({
                message: 'User Not Found',
            });
        }
        user.name = updatedname;
        user.email = updatedemail;
        user.password = updatedpassword;
        return user.save();
    })
    .then(user => {
        res.status(200).json({ 
            message: 'User updated successfully!',
            user: user });
    })
    .catch(err => {
        res.status(500).json({ 
            message: 'Error -> ' + err });
    });
}

//Delete user
exports.deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    User.findByPk(userId)
    .then(user => {
        if (!user) {
            return res.status(400).json({
                message: 'User Not Found',
            });
        }
        return user.destroy({
            where: { 
                id: userId 
            }
        });
    })
    .then(() => {
        res.status(200).json({ 
            message: 'User deleted successfully!' });
    })
    .catch(err => {
        res.status(500).json({ 
            message: 'Error -> ' + err });
    });
}





