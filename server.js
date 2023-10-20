// Load express
const express = require('express');

// Middleware 
const middleware = require("./middleware");

const cors = require('cors');

// Load Routes
const routes = require('./routes');

// Create App
const app = express();

//let the frontend be able to read the data
app.use(cors({origin:'*'}))

// Load environment variables
require('dotenv').config({ path: "./.env"})

// Load configuration to database
require("./config/database")

// Parse request body with express
app.use(express.json());

// Define entries routes
app.use("/api/users", routes.userRouter);
app.use("/api/posts", middleware.checkToken, routes.postRouter);

// Launch app
app.listen(process.env.PORT, ()=> console.log(`Serveur en écoute sur le port: ${process.env.PORT}`));
