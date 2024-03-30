//GLOBAL
exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

//LOGADO OU NÃO
exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login para acessar esta página.');
        req.session.save(() => {
            res.redirect('/');
        })
        return
    }

    next();
};

//CSRF
//VERIFICA ERRO
exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        console.log(err);
       return res.render('404');
    }

    next();
};

//GERA TOKEN
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}