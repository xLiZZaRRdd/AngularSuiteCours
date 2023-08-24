export interface Pokemon{
    //6 infos à prendre pour définir un Pokemon
    name : string;
    id : number;
    weight : number;
    height : number;
    types :  {type : {name : string}}[];
    sprites : {front_default : string, back_default : string};
}