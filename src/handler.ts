import { Router } from "itty-router";
import { Users } from "./api/v1/users";

// Router: Creation of router
const router = Router();

// GET: Handle all GET routes
router.get("/api/v1/users", Users);

// POST: Handle all POST routes
router.post("/api/v1/users", Users);

// Function Module
export const handler = (request: Request) => router.handle(request);
