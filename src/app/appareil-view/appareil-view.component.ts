import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
 name = "Angular Project";

  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    if (confirm("Etes vous sur d'allumer tous les appareils ?")) {
      this.appareilService.switchOnAll();
    } else {
      return null;
    }
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
}