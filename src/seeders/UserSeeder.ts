import looger from "../lib/looger";
import UserSchema, { IUser } from "../models/users";
import PeopleSchema, { IPeople } from "../models/people";
import UserJson from "../json/users.json";

const createUserSystem = async () => {
    try {        
        UserJson.map(async (item) => {
            const peopleFound = await FilterPeopleWithStateActive(item.email);
            if(peopleFound[0]){
                const saveUser = UserSchema.create({ 
                    personId: peopleFound[0]._id,
                    name: (peopleFound[0].business_name ? peopleFound[0].business_name : `${peopleFound[0].last_name} ${peopleFound[0].first_name}`),
                    email: peopleFound[0].email,
                    password: item.password,
                    roles: item.roles,
                    avatar: item.avatar,
                    isActive: item.isActive
                });
                looger.info(`Usuario ${saveUser} Creado`);
            }
        });       
    } catch(e){
        looger.info('Error cargando User',e);
    }
}
const FilterPeopleWithStateActive = async (email:string) => {
    return await PeopleSchema.aggregate([
        {
            $match: { email: email }
        }
    ]);
}
const dropUserSystem = async () => {

}
export default { createUserSystem, dropUserSystem }