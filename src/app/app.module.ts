import { NgModule }      from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
    "clientId": "369088351499-obg6e3rl8slu39m89fn7r456bnbq3smn.apps.googleusercontent.com"
  }
  };

@NgModule({
  imports: [ 
              BrowserModule,
              Angular2SocialLoginModule
          ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(){}
}

Angular2SocialLoginModule.loadProvidersScripts(providers);
