/**
 * Created by PPan on 22/09/2017.
 */
export interface BehaviourSummary{
    id:number;
    name:string;
}

export interface Behaviour{
    summary: number | string;
    type:string;
    code:string
}



export interface BehaviourDetails{
    code:string;
    details:string[]
}