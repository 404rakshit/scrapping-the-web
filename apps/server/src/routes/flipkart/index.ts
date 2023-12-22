import { Router } from "express";
const route = Router();

route.get("/", (req, res) => {
  res.json("Flipkart");
});

export default route;
