import looger from "../lib/looger";
import PeopleSchema, { IPeople }  from '../models/people';
import peopleJson from '../json/people.json';

const createPeopleSystem = async () => {
    try {
        await peopleJson.map(item => {
            const newPeople = new PeopleSchema({
                dni: item.dni,
                type_dni: item.type_dni,
                business_name: item.business_name,
                last_name: item.last_name,
                first_name: item.first_name,
                slug: '',
                phone: item.phone,
                landline: item.landline,
                email: item.email,
                address: item.address,
                country_id: item.country_id,
                departament_id: item.departament_id,
                municipality_id: item.municipality_id,
                location_id: item.location_id,
                neighborhood_id: item.neighborhood_id,
                latitude: item.latitude,
                longitude: item.longitude,
                birthdate: item.birthdate,
                isActive: item.isActive
            });
            newPeople.save();
            looger.info('Cargando datos de People')
        });       
    } catch(e){
        console.log(e)  
    }
}

const dropPeopleSystem = async () => {

}
export default { createPeopleSystem, dropPeopleSystem }