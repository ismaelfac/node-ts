import mongoose from "mongoose";
import looger from "../lib/looger";

const dbConnect = () => {
    const DB_HOST: any = process.env.DB_HOST;
    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true, 
        useUnifiedTopology: true
    }, err => {
        if(err) {
            looger.info('****** Conexion Errada *******');
            process.exit(1);
        }else{
            looger.info('Conexion a la Base de Datos Exitosa');
        }
    }
}

module.exports = { dbConnect }