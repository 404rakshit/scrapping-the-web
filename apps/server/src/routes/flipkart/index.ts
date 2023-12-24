import { Router } from "express";
import { searchProducts } from "../../utils/getFlipkart";
const route = Router();

route.post("/", searchProducts);

export default route;
