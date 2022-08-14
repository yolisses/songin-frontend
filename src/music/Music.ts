import { Artist } from '../artist/Artist';

export interface Music{
    id:number
    name:string
    image:string
    artist:Artist
    duration:number // seconds
    likesCount:number
}
