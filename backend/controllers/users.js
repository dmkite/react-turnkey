const model = require('../models/users')

function signup(req, res, next) {
    const {f_name, l_name, username, password, passwordMatch } = req.body

    if (!username || !password || !f_name || !l_name || password !== passwordMatch) 
        return next({status: 400, message: 'Signup error'})

    return model.signup(f_name, l_name, username, password)
        .then(([data]) => {
            if (!data) return next({
                status: 500,
                message: 'Something went wrong'
            })
            res.status(201).send({
                message: `Account created for ${data}`
            })
        })
        .catch(next)
}


module.exports = {signup}