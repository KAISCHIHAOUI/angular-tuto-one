import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  name = "TRAINING WITH Angular+";
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
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

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
