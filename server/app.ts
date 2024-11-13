import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { testMiddleware }   from "./middleware/test";
import { usersRouter } from "./routers";

const app = express()

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Training Project API",
      version: "1.0.0",
      description:
        "This is the Swagger API documentation for the Training Project API.",
    },
  },
  apis: ["./routers/*.ts"], // files containing annotations as above
};

const swaggerSpec = swaggerJsDoc(options);
console.log("swaggerSpec", swaggerSpec);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("*", testMiddleware);
app.get('/', (req, res) => {
  res.send('Go Bills!')
});
app.use("/users",  usersRouter);

export default app;
