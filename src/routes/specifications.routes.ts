import { Router } from "express";

import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/services/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.use(EnsureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
