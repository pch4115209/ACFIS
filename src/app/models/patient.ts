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

export interface NOK{
    name:string;
    phone:string;
    fax:string;
}

export interface AdmissionInfo{
    room: string;
    location:string;
    dateOfAdmission:string;
}

export class Patient{
    constructor(
        public id:number,
        public name:string,
        public dob?:string,
        public age?:number,
        public gender?:string,
        public notes?:string,
        public admissionInfo?:AdmissionInfo,
        public address?:Address,
        public nok?:NOK[],
        public behaviours?:any[],
    ){}
}


