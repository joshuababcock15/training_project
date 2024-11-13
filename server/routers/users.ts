import { Router } from "express";
import { deleteUsers, getUser, getUsers, postUsers, putUsers } from "../controllers/users";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API
 */
const router: any = Router();

// GET all users
/**
 * @openapi
 * /users:
 *   get:
 *     description: Get a list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a JSON list of all the users
 */
router.route("/").get(getUsers);

// POST a user
/**
 * @openapi
 * /users:
 *   post:
 *     description: Post a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a string
 */
router.route("/").post(postUsers);

// PUT a user
/**
 * @openapi
 * /users/{id}:
 *   put:
 *     description: Put a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a string
 */
router.route("/:id").put(putUsers);

// DELETE a user
/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     description: Delete a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a string
 */
router.route("/:id").delete(deleteUsers);

// GET a user
/**
 * @openapi
 * /users/{id}:
 *   get:
 *     description: Get a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a string
 */
router.route("/:id").get(getUser);

export default router;