import jwt from "jsonwebtoken";

export const tokenSing = async (user: any) => {
    return jwt.sign(
        { id: user._id, role: user.roles },
        process.env.APP_KEY || 'ALIADOS', { expiresIn: 86400 }
    );
}

export const verifyToken = async (token: string) => {
    try {
        return await jwt.verify(token, process.env.APP_KEY || 'ALIADOS')
    }catch (e) {
        return null
    }
}


module.exports = { tokenSing, verifyToken }