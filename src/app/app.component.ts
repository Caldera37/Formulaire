import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  title2 = "Bonjour";
  isAdmin: boolean = true;

  onomatopoeiaList:string[]= ["blabla","capoué","blupblup","lafizikkantikéalaportédetoulemonde"]

  constructor() {}

  ngOnInit() {}

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }

  toggleEditButton(): void {
    this.isAdmin = !this.isAdmin;
  }

  
}
