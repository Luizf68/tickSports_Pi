const loginController = {
        
    index:(req, res) => {
        return res.render('login')
    },
    logarUsuario: (req, res) => {
        let {email, senha, logado} = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson, {encoding: 'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);

        if (email != usuarioSalvo.email){
            return res.send('Usuario invalido!')
        } 
        
        if (!bcrypt.compareSync(senha, usuarioSalvo.senha)){
            return res.send('Senha Invalida!')
        }

        if (logado != undefined){
            res.cookie('logado', usuarioSalvo.email, {maxAge: 600000})
        }

        res.redirect('/home')
        
    }
 
    
}



module.exports = loginController 