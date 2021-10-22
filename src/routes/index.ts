import { Router } from "express";
import looger from "../lib/looger";
import fs from "fs";
const router: Router = Router();


const pathRouter = `${__dirname}`;

const removeExtension = (fileName: any) => {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithOutExt);
    if(!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)); //TODO: localhost/moduloName
        looger.info(`CARGANDO RUTA---> ${fileWithOutExt}`,);
    }
})

router.get('*', async (req, res) => {
    //const tokenData = await verifyToken(req.body.token);
    //looger.info(`Not found Route --- host: ${req.headers.host} peticion usuario: ${JSON.stringify(tokenData.id)}`);
    res.status(404).send({error: 'Not found route'});
});

export default router;