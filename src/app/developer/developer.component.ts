import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  
  user: Developer = new Developer ("Roi sorcier", "Hang'mar",9999, "male", "Sorcier légendaire devenu Nazgul par Sauron !", [
    new Skill ("Fireball",1000, 5.48),
    new Skill ("Doomblade",3000, 11.35),
    new Skill ("Fear",0, 21.89)
  ]);
  

  constructor() { }

  ngOnInit(): void {
  }
  
}
