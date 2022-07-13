const models= require("../../models");

const addPlace= async(req,res) => {

    try{
        const { body }=req;

        const place= await models.places.create({
            name:body.name,
            description: body.description,

        });

      return res(201).send(place);
    } catch (error){
        return res
        .status(500)
        .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

module.exports= {addPlace}