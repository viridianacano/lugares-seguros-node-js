const {addPlace}= require("../controllers/places");

const {Router} =require("express");

const router=Router();

router.post("/place", addPlace);

module.exports= { router }