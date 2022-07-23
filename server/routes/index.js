const {addPlace, getPlaces, updatePlace, deletePlace, }= require("../controllers/places");

const { addCommentToPlace, getCommentByPlace, deleteComment }= require("../controllers/comments");

const {Router} =require("express");

const router=Router();

router.route("/places").post(addPlace).get(getPlaces);

router.put("/places/:placeId", updatePlace);

router.delete("/places/:placeId", deletePlace);

router.post("/comments", addCommentToPlace);

router.get("/comments/:placeId", getCommentByPlace);

router.delete("/comments/:commentId",deleteComment);


module.exports= { router };