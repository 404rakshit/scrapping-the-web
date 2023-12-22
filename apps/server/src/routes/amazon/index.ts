import { Router } from "express";
import { searchProducts } from "../../utils/getAmazon";
const route = Router();

route.post("/", searchProducts);

export default route;
