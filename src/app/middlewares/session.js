//middleware que vai identificar se o usuário está logado
//caso não esteja logado bloqueará rota

function onlyUsers(req, res, next) {
    if(!req.session.userId){
        return res.redirect('/users/login')
    }

    next()
}

module.exports = {
    onlyUsers
}