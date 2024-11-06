import { Router } from "express";
import { deleteUsers, getUser, getUsers, postUsers, putUsers } from "../controllers/users";

const router: any = Router();

router.route("/").get(getUsers);

router.route("/").post(postUsers);

// router.route("/").post((req: any, res: any) => {
//   res.send("Posted to users!");
// });

router.route("/:id").put(putUsers);

// router.route("/:id").put((req: any, res: any) => {
//   res.send("Put to users!");
// });

router.route("/:id").delete(deleteUsers);

// router.route("/:id").delete((req: any, res:any) => {
//   res.send("Deleted users!");
// });

router.route("/:id").get(getUser);

// router.route("/:id").get((req:any, res:any) => {
//   res.send("Got a user!");
// });


export default router;