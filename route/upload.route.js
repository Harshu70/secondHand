import express from "express";
import { upload } from "../controller/upload.controller.js";
const router = express.Router();

router.post("/", upload);
export default router;