import { User } from '../user/User';

export interface Comment{
    user:User
    text:string
    liked:boolean
    likesCount:number
    replies?:Comment[]
    repliesCount:number

    createdAt:any // todo
}
