import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User API",
            version: "1.0.0",
            description: "API documentation for User service",
        },
    },
    apis: ["./routes/user.mjs"], // Path to your API routes
};

const swaggerSpec = swaggerJSDoc(options);

export default (app, port) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger Docs available at http://localhost:${port}/docs`);
};
