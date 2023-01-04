import { Router } from "express";
import * as ProjectController from "../controller/ProjectController/ProjectController";
const projectRouter = Router() 

projectRouter.get('/', ProjectController.getData);

export default projectRouter