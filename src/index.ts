import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import * as http from 'http';

var app:express.Application = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({status: "ok"});
});


let httpPort = 3000;
app.set("port", httpPort);
var httpServer = http.createServer(app);

//listen on provided ports
httpServer.listen(httpPort, (data) => {
  console.log(`Listening on port ${httpPort}`)
});