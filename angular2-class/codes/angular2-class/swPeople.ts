import {People} from './people';
import {HairColor} from "./hairColor";

export class SWPeople implements People {
  name: string;
  homeworld: string;
  mass:number;
  hair_color: HairColor;

  constructor(name:string, mass:number, hair:HairColor, homeworld:string) {
    this.name = name;
    this.mass = mass;
    this.hair_color = hair;
    this.homeworld = homeworld;
  }
}
