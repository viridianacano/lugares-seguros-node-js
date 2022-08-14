const bcryptjs= require("bcryptjs");
const jwt=require("jsonwebtoken");

const {JWT}=require("../../config/config");
const models=require("../../database/models");


const login= async(req,res) => {
    try{

        const { body }=req;

        const findUser= await models.users.findOne({

            where: {
                username: body.username,

            },
        });

        if(!findUser) 
          return res.status(404).send("No se encontro un usuario con ese username");
         
        if(!bcryptjs.compareSync(body.password, findUser.password))
         return res.status(404).send("La contraseña no coincide");

        delete findUser.dataValues.password;

        const token= jwt.sign({ userId: findUser.id }, JWT.SEED, {
             expiresIn: JWT.EXPIRES,
        } );
         
        return res.status(200).send({ data: findUser, token: token });

    } catch(error) {
        return res
         .status(500)
         .send("Lo sentimos ha ocurrido un error interno en el servidor");
    }
};

module.exports= {login};