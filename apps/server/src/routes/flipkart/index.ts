import { Router } from "express";
import { getAllProducts } from "../../utils/getFlipkart";
const route = Router();

route.post("/", getAllProducts);

route.get("/", getAllProducts);
export default route;
