import { User } from '../user/User';

export interface Profile{
    user:User
    following:boolean
    followersCounter:number
    followingCounter:number
}
