const bycryptjs = require("bcryptjs");
const models= require("../../database/models");

const registry= async (req, res) => {

    try{

        const { body} =req;

        encPassword= bycryptjs.hashSync(body.password, 10);

        const addUser= await models.users.create({
            username: body.username,
            password: encPassword,
        });

        delete addUser.dataValues.password;

        return res.status(201).send(addUser);

    }catch (error){
        return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error interno en el servidor");
    }

};

module.exports= { registry};