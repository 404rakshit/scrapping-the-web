import { Router } from "express";
import { getAllProducts } from "../../utils/getAmazon";
const route = Router();

route.post("/", getAllProducts);

route.get("/", getAllProducts);

export default route;
