import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular Project";

  isAuth = false;

  appareils = [
    { name: "Machine à laver", status: "éteint" },
    { name: "Frigo", status: "allumé" },
    { name: "Ordinateur", status: "éteint" }
  ];

  // appareilOne = "Machine à laver";
  //appareilTwo = "Frigo";
  //appareilThree = "Ordinateur";

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {
    console.log("on allume tous ! ");
  }
}
