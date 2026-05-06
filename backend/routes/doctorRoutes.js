import express from "express";
import multer from "multer";

import {createDoctor,getDoctors, doctorLogin, getDocotorById,updateDoctor,toggleAvailability,deleteDoctor } from "../controllers/doctorController.js";

import doctorAuth from "../middlewares/doctorAuth.js"

const upload = multer({dest: "/tmp"})
export const doctorRouter = express.Router();

doctorRouter.get("/", getDoctors);
doctorRouter.post("/login", doctorLogin);

doctorRouter.get("/:id", getDocotorById)
doctorRouter.post("/", upload.single("image"),createDoctor);

doctorRouter.put("/:id",doctorAuth, upload.single("image"),updateDoctor);
doctorRouter.post("/:id/toggle-availability", doctorAuth, toggleAvailability);
doctorRouter.delete("/:id", doctorAuth, deleteDoctor);