import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppareilComponent } from "./appareil/appareil.component";

import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AppareilComponent, AuthComponent, AppareilViewComponent],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
