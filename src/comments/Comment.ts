import { User } from '../user/User';

export interface Comment{
    id:number
    owner:User
    text:string
    liked:boolean
    createdAt:any // todo
    error?:boolean
    sending?:boolean
    likesCount:number
    replies?:Comment[]
    repliesCount:number
}
