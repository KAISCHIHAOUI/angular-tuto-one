import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.css"]
})
export class AppareilComponent implements OnInit {
  appareilName: String = "Laptop";
  constructor() {}

  ngOnInit() {}
}
