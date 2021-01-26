import { Component, OnInit, VERSION } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    //create observable
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      value => {
        this.secondes = value;
      },
      error => {
        console.log("An error occured ! : " + error);
      },
      () => {
        console.log("Observable complete ! ");
      }
    );
  }

  name = "TRAINING WITH Angular+";
}
