import express from "express";
import {watch, getEdit,postEdit,upload,deleteVideo} from "../controllers/videoController";

const videoRouther = express.Router();


videoRouther.get("/:id(\\d+)",watch);
videoRouther.get("/:id(\\d+)/edit",getEdit);
videoRouther.post("/:id(\\d+)/edit",postEdit);


export default videoRouther
