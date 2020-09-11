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
    }
}