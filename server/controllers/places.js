const models= require("../../database/models");

const addPlace= async(req,res) => {

    try{
        const { body }=req;

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

        });

    return res.status(201).send(place);
    } catch (error) {
        console.log(error);
        return res
         .status(500)
         .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

const getPlaces= async(req,res) =>{
    try{
      const places= await models.places.findAll({
      
        include: {
         model:models.address,
        },
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
        return res.send(place);

        await models.places.update(
            {
            name:body.name,
            description: body.description,
        },
        {
           where:{
            id:placeId,
           },

        }
        );

        await models.place.update({

        })





        return res.status(200).end(place);
    } catch (error){

        return res
         .status(500)
         .send("Lo sentimos ha ocurrido un error en el servidor");
    }
};

module.exports= {addPlace, getPlaces, updatePlace};
