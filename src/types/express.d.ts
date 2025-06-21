import { UserPayload } from "src/user/types"
declare module 'express' {
    interface Request {
        user?: UserPayload
    }
}