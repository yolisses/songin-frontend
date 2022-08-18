import { Artist } from '../artist/Artist';

export interface Music{
    id:number
    name:string
    audio:string
    image:string
    liked:boolean
    artist:Artist
    duration:number // seconds
    likesCount:number
}
