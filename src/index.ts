import express from "express";
import looger from "./lib/looger";
import router from "./routes";
// Initializations
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/1.0', router);

// Static files


// Starting the server
app.listen(app.get('port'), () => {
    looger.info(`API listen with port ${ app.get('port') }`);
});