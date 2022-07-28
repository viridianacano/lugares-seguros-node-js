const models= require("../../database/models");

const { fileUpload }= require("../utils/uploadFiles");

const addPlace= async(req,res) => { //modulo agregar lugares

    try{
        const { body }=req;

        let image= fileUpload(body.image, "/public");
        console.log("IMAGEN ES => " + image);
        image= `http://localhost:5051${image}`;

        const address= await models.address.create({
            state: body.state,
            city: body.city,
            suburb: body.suburb,
            street: body.street,
            postalCode: body.postalCode,

        });

        const place= await models.places.create({
            name:body.name,
            description: body.description,
            addressId:address.id,
            image,

        });

    return res.status(201).send(place);
    } catch (error) {
        console.log(error);
        return res
         .status(500)
         .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

const getPlaces= async(req, res) =>{ 
    try{
      const places= await models.places.findAll({
        attributes:{exclude : ["updatedAt"]},
      
        include: [
        {
         model:models.address,
         attributes: { exclude: ["createdAt","updatedAt"]},

        },


        {
         model: models.likes,
         attributes: ["id", "isLike", "userId"],
        },
    ],
      });
       
       
      return res.status(200).send(places);
    } catch (error){
        console.log(error);
        return res
         .status(500)
         .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

const updatePlace= async(req, res) =>{
    try{
      
        const {placeId}=req.params;
        const { body }=req;

        const place=await models.places.findOne({

            where:{
              id: placeId,
            },
        });

        if(!place) return res.status(404).send("El lugar no se encuentra");

        const address=await models.address.findOne({

            where: {
                id: place.addressId,
            },
        });


        await place.update({
            name:body.name,
            description: body.description,
        });

        if (address)
        await address.update({
            state: body.state,
            city: body.city,
            suburb: body.suburb,
            street: body.street,
            postalCode: body.postalCode,

        });

      
        
        return res.status(200).send(place);
    } catch (error){

        return res
         .status(500)
         .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

const deletePlace= async (req,res) =>{
    try{
      
        const {placeId}=req.params;
        

        const place=await models.places.findOne({

            where:{
              id: placeId,
              statusDeLete: false,
            },
        });

        if(!place) return res.status(404).send("El lugar no se encuentra");


        await place.update({
            statusDeLete: true,
        });

        return res.status(200).send("Se ha eliminado el place");
        } catch (error){
        console.log(error);
        return res
         .status(500)
         .send("lo sentimos ha ocurrido un error interno en el servidor");

        }

};

module.exports= {addPlace, getPlaces, updatePlace, deletePlace};
