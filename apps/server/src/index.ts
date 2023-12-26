// Import builtin NodeJS modules to instantiate the service
import http from "http";
import express from "express";
import amazonRoute from "./routes/amazon";
import flipkartRoute from "./routes/flipkart";
import cors from "cors";
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3001"],
  })
);
// app.use(express.urlencoded());

http.createServer(app).listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});

app.use("/amazon", amazonRoute);
app.use("/flipkart", flipkartRoute);

app.get("/", (req, res) => {
  res.json("Up and Running");
});
