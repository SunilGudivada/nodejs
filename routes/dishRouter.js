const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")

  .all((req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    next();
  })

  .get((req, res, next) => {
    res.end("Sending all the dishes");
  })

  .post((req, res, next) => {
    res.end("Creating new dish");
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation is not supported");
  })

  .delete((req, res, next) => {
    res.end("Deleting all the dishes");
  });

dishRouter
  .route("/:dishId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send details of the dish " + req.params.dishId + " to you!");
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`Cannot perform POST operation here`);
  })
  .put((req, res, next) => {
    res.write("Updating the dish: " + req.params.dishId + "\n");
    res.end(
      "Will update the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete(function (req, res, next) {
    res.end("Deleting dish: " + req.params.dishId);
  });

module.exports = dishRouter;
