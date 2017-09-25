/**
 * Created by PPan on 21/09/2017.
 */
import  { Behaviour } from './behaviour-type';

export interface Address{
    streetNumber:number;
    streetName:string;
    suburb:string;
    city:string;
    state:string;
    postcode:number;
    country:string
}

export class Patient{
    constructor(
        public id:number,
        public name:string,
        public age?:number,
        public gender?:string,
        public notes?:string,
        public address?:Address,
        public behaviours?:any[],
    ){}
}


