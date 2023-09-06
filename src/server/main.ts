import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';
//import fs from "fs-extra";

const app = express();
const port :number = parseInt(process.env.PORT as string)

app.get('/hello/:nom/', (req, res) => {
  const name = req.params.nom;
  //console.log( parseInt(req.params.min));
  
  res.send("Hello "+name);
})

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});



ViteExpress.listen(app, port, () =>
  console.log("Server is listening on port " + port + "...")
);
