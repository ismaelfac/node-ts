import mongoose from 'mongoose';
import looger from '../lib/looger';

export const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/node-test-api', {
        
    })
    .then(db => looger.info('Conexion a la Base de Datos Exitosa'))
    .catch(err => looger.info('****** Conexion Errada *******'));
}