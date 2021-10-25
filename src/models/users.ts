import mongoose, {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

export const UserSchema = new Schema(
    {
        personId: {
            type: mongoose.Types.ObjectId, 
            ref: "people"
        },
        name: {
            type: String,
            require: true,
            index: true
        },
        email: {
            type: String,
            unique: true,
            index: true,
            trim: true
        },
        password: {
            type: String
        },
        roles: {
            type: String,
            default: 'user'
        },
        avatar: {
            type: String,
            trim: true,
            required: true //Debe tener un valor
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
export interface IUser extends mongoose.Document{
    _id: String,
    roles: String,
    name: String,
    email: String,
    avatar: String,
    isActive: Boolean
}

UserSchema.statics.encryptPassword = async (password)  => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model<IUser>('users', UserSchema)