import express from "express";
import buyBook from "../controller/buy.controller.js";

const router = express.Router();

router.get("/:id", buyBook);

export default router;

