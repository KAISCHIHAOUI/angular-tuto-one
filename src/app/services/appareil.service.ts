export class AppareilService {
  appareils = [
    { name: "Machine à laver", status: "éteint" },
    { name: "Frigo", status: "allumé" },
    { name: "Ordinateur", status: "éteint" }
  ];
  switchOnOne(i: number) {
    this.appareils[i].status = "allumé";
  }
  switchOffOne(i: number) {
    this.appareils[i].status = "éteint";
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = "allumé";
    }
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      if ((appareil.status = "allumé")) {
        appareil.status = "éteint";
      }
    }
  }
}
