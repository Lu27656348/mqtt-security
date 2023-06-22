const jwt = require('jsonwebtoken');
const secret = 'sistemasdistribuidos2023';

const verify = (req,res,next)=> {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token || token == undefined){
        res.status(401).json({
            error: "Es necesario el token para acceder a la aplicacion"
        })
    }else{  
        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length);
        }
    }
    if(token){
        jwt.verify(token, secret ,(error,decoded)=> {
            if(error){
                return res.json({
                    message: 'Token no valido'
                })
            }else{
                req.decoded = decoded;
                next();
            }
        });
    }
};

module.exports = verify;