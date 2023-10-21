
const models = require("../models");
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");

module.exports = {

    allUsers: async (req, res, next) => {
        const users = await models.User.find({}, { __v: 0, password: 0 }).sort({ createdAt: -1 });
        return res.status(200).json({ result: users });
    },

    addUser: async (req, res, next) => {
        let password = req.body.password;
        let userFound = await models.User.findOne({ email: req.body.email });
        if (!userFound) {

            bcrypt.hash(password, 5, async (err, bcryptedPassword) => {
                try {
                    const user = await models.User.create({
                        ...req.body,
                        password: bcryptedPassword
                    });
                    return res.status(201).json({ user: user });
                } catch (error) {
                    return res.status(400).json({ error: "Sorry. Something went wrong " + error });
                }
            });
        } else {
            return res.status(400).json({ error: "This email is already used !" });
        }
    },

    loginUser: async (req, res, next) => {
        // params
        let { email, password } = req.body

        if (email.length == 0 || password.length == 0) {
            return res.status(400).json({ error: 'Missing parameters' })
        }
        let userFound = await models.User.findOne({ email: req.body.email });

        if (userFound) {
            bcrypt.compare(password, userFound.password, function (errBcrypt, resBcrypt) {
                if (resBcrypt) {
                    return res.status(200).json({
                        userId: userFound.id,
                        access_token: jwtUtils.generateTokenForUser(userFound)
                    })
                }
                else {
                    return res.status(403).json({ error: 'Invalid password' })
                }
            })
        } else {
            return res.status(404).json({ error: 'User not found' })
        }

    },

    getUserProfile: async (req, res, next) => {
        // Getting auth header
        let headerAuth = req.headers['authorization'];
        let userId = jwtUtils.getUserId(headerAuth);
        if (userId === -1) {
            return res.status(400).json({ error: 'Wrong token ' })
        }
        let userFound = await models.User.findOne({ _id: userId });


        if (userFound) {
            return res.status(200).json({ result: userFound })
        } else {
            return res.status(404).json({ error: 'User not found' })

        }
    }
}