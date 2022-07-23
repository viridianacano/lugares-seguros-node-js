const models = require("../../database/models");

const addCommentToPlace= async(req,res)=>{
    try{

        const {body}=req;

        const existPlace= await models.places.findOne({
            where:{
                id: body.placeId,
                statusDeLete: false,

            },
        });

        if(!existPlace) return res.status(404).send("El lugar no existe");

        const comment= await models.comments.create({
            placeId: body.placeId,
            comment:body.comment,
        });
        return res.status(201).send(comment);

    }catch(error){
        console.log(error);
        return res.status(500).send("Error interno en el servidor");
    }
};

const getCommentByPlace=async(req,res) =>{
    try{
        const{ placeId}= req.params;

        const comments= await models.comments.findAll({

            where:{
                placeId: placeId,
                statusDeLete:false,
            },
         
        });

      return res.status(200).send(comments);
    } catch(error){
        return res.status(500).send(" Error interno en el servidor");

    }
};

const deleteComment= async (req,res) =>{
    try{
        const { commentId }= req.params;

        const comment=await models.comments.findOne({
            where:{
                id: commentId,
            },
        });

        if (!comment) return res.status(404).send("El comentario no existe");

        await comment.update({
            statusDeLete: true,
        });

        return res.status(200).send("El comentario se ha eliminado");

    } catch(error){
        return res.status(500).send(" Tiene un error en el servidor");
    }

};

module.exports={ addCommentToPlace, getCommentByPlace, deleteComment};