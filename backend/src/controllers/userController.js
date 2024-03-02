const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

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

// Create user and generate token
exports.createUser = async (req, res, next) => {
<<<<<<< Updated upstream
    const { name, email, password, confirmPassword, role } = req.body;
=======
    const { fullName, cpf, dataNasc, gender, phone, email, street, number, complement, district, city, state, cep, role, userName, password, confirmPassword } = req.body;
>>>>>>> Stashed changes

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user in the database with the hashed password
        const user = await User.create({
<<<<<<< Updated upstream
            name: name,
            email: email,
            password: hashedPassword, // Store the hash of the password
            role: role
=======
            fullName: fullName,
            cpf: cpf,
            dataNasc: dataNasc,
            gender: gender,
            phone: phone,
            email: email,
            street: street,
            number: number,
            complement: complement,
            district: district,
            city: city,
            state: state,
            cep: cep,
            role: role,
            userName: userName,
            password: hashedPassword
>>>>>>> Stashed changes
        });

        // Generate authentication token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET, // Secret key from .env file
            { expiresIn: '1h' } // Token expiration time
        );

        res.status(201).json({ 
            message: 'User created successfully!', 
            user: user,
            token: token
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error creating user -> ' + error 
        });
    }
};

//Login user
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        // Compare the password with the hash stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        // Generate authentication token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET, // Secret key from .env file
            { expiresIn: '1h' } // Token expiration time
        );

        res.status(200).json({ 
            message: 'User logged in successfully!', 
            user: user,
            token: token
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error logging in -> ' + error 
        });
    }
};


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





