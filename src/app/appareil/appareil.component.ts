import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-appareil",
  templateUrl: "./appareil.component.html",
  styleUrls: ["./appareil.component.css"]
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String = "Machine à laver";
  @Input() appareilStatus: String = "Eteind";

  constructor() {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }
}
