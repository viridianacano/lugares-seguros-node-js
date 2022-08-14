const {addPlace, getPlaces, updatePlace, deletePlace, }= require("../controllers/places");

const { addCommentToPlace, getCommentByPlace, deleteComment }= require("../controllers/comments");

const { addLikeDislike } = require("../controllers/likes");

const { registry }= require("../controllers/users");

const { login }= require("../controllers/login");

const {verifyToken}=require("../middlewares/auth");

const {Router} =require("express");


const router=Router();

router.route("/places").post(verifyToken, addPlace).get(getPlaces);

router.put("/places/:placeId", updatePlace);

router.delete("/places/:placeId", deletePlace);

router.post("/comments", addCommentToPlace);

router.get("/comments/:placeId", getCommentByPlace);

router.delete("/comments/:commentId",deleteComment);

router.post("/likes",addLikeDislike);

router.post("/registry",registry);

router.post("/login", login);

module.exports= { router };