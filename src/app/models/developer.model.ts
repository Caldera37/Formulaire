import { Skill } from "./skill.model";

export class Developer {

    constructor(

        public title: string,
        public lastname: string,
        public hp: number,
        public gender: string,
        public bio: string,
        public skillList: Skill[],
        

    ) {}

}