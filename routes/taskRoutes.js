import { Router } from "express";
import {
  createATask,
  deleteATask,
  getATask,
  getAllTasks,
  patchATask,
} from "../controller/taskController.js";

const router = Router();

router.route("/").get(getAllTasks).post(createATask);
router.route("/:id").get(getATask).patch(patchATask).delete(deleteATask);

export default router;
