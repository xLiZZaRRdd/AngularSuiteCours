export interface Pokemon{
    name : string;
    id : number;
    weight : number;
    height : number;
    types : string[];
    sprites : {front_default : string, back_default : string}
}