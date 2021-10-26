import mongoose from 'mongoose';

export const PeopleSchema = new mongoose.Schema(
    {
        dni: {
            type: String,
            require: true,
            index: true
        },
        type_dni: {
            type: String,
            require: true,
            index: true
        },
        last_name: {
            type: String,
            index: true,
            default: null
        },
        first_name: {
            type: String,
            index: true,
            default: null
        },
        business_name: {
            type: String,
            index: true,
            default: null
        }, 
        slug: {
            type: String,
            default: null
        },    
        email: {
            type: String,
            unique: true,
            index: true
        },
        address: {
            type: String,
            index: true,
            default: null
        },
        phone: {
            type: String,
        },
        landline: {
            type: String,
        },
        country_id: {
            type: String,
        },
        departament_id: {
            type: String,
        },
        municipality_id: {
            type: String,
        },
        location_id: {
            type: String,
        },
        neighborhood_id: {
            type: String,
        },
        latitude: {
            type: String,
        },
        longitude: {
            type: String,
        },
        birthdate: {
            type: Date,
        },
        isActive: {
            type: Boolean,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
export interface IPeople extends mongoose.Document{
    dni?: String,
    type_dni?: String,
    last_name?: String | undefined,
    first_name?: String | undefined,
    business_name?: String | undefined,
    slug?: String | undefined,
    email?: String,
    address?: String,
    phone?: String,
    landline?: String,
    country_id?: String,
    departament_id?: String,
    municipality_id?: String,
    location_id?: String | undefined,
    neighborhood_id?: String | undefined,
    latitude?: String | undefined,
    longitude?: String | undefined,
    birthdate?: Date | undefined,
    isActive?: Boolean
}

export default mongoose.model('people', PeopleSchema)