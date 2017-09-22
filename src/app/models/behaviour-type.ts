/**
 * Created by PPan on 22/09/2017.
 */
export interface BehaviourType{
    code:string;
    brief:string;
    details:BehaviourDescription[]
}

export interface BehaviourDescription{
    code:string;
    details:string;
}