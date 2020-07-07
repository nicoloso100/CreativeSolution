import { Router } from "express";
import { contactEmail } from "./Controllers/emailController";
const router = Router();

router.post("/contactEmail", contactEmail);

export default router;
