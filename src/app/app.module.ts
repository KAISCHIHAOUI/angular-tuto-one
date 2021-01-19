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

const appRoutes: Routes = [
  { path: "appareils", component: AppareilViewComponent },
  { path: "auth", component: AuthComponent },
  { path: "", component: AppareilViewComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
