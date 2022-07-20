const {addPlace, getPlaces, updatePlace }= require("../controllers/places");

const {Router} =require("express");

const router=Router();

router.route("/places").post(addPlace).get(getPlaces);

router.put("/places/:placeId", updatePlace);

module.exports= { router };