import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppareilComponent } from "./appareil/appareil.component";

import { AppareilService } from "./services/appareil.service";
import { AuthService } from "./services/auth.service";
import { AuthComponent } from "./auth/auth.component";
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { RouterModule, Routes } from "@angular/router";
import { SingleAppareilComponent } from "./single-appareil/single-appareil.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";

const appRoutes: Routes = [
  { path: "appareils", component: AppareilViewComponent },
  { path: "appareils/:id", component: SingleAppareilComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: AppareilViewComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
