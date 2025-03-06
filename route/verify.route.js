import express from "express";
import { updateVerification } from "../controller/verify.controller.js";

const router = express.Router();

router.put("/:id", updateVerification); 
export default router;
