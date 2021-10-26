import { dbConnect } from "../database/mongo";
import looger from "../lib/looger";
dbConnect();

/**archivos seeders */
import PeopleSeeder from'./PeopleSeeder';
import UserSeeder from'./UserSeeder';

//**Cargar del Sistema */
const loadSeeder = async () => {
    looger.info('Cargando Seeders...')
    //await PeopleSeeder.createPeopleSystem();
    await UserSeeder.createUserSystem();
    looger.info('Inyeccion de Seeders finalizada')
}

loadSeeder();
