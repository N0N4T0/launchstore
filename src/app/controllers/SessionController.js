const crypto = require('crypto')
const User = require('../models/User')

module.exports = {
    loginForm(req, res){
        return res.render("session/login")
    },

    login(req, res){
        //verificar se o usuário está cadastrado
        //verificar se o password bate
        //depois colocar o usuário no req.session

        req.session.userId = req.user.id

        return res.redirect("/users")
    },

    logout(req, res) {
        req.session.destroy()

        return res.redirect("/")
    },

    forgotForm(req, res){
        return res.render("session/forgot-password")
    },

    forgot(req, res) {
        const user = req.user

        //token para esse usuário
        const token = crypto.randomBytes(20).toString("hex")

        //criar uma expiração do token
        let now = new Date()
        now = now.setHours(now.getHours() + 1)

        await User.update(user.id, {
            reset_token: token,
            reset_token_expires: now
        })

        //enviar um email com um link de recuperação de senha
        //avisar o usuário que enviamos o e-mail

    }

}