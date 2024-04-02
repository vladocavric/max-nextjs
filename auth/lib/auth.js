import { hash, compare } from "bcrypt"

export const hashedPassword = async (password) => {
    return await hash(password, 12)
}

export const verifyPassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword)
}