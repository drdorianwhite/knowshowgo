import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpModule, JsonpModule } from '@angular/http';
import { WordComponent } from "./ksg-components/word/word.component";
import { LanguageDataService } from "./ksgapi-services/language.service";
import { AccountsModule } from 'angular2-meteor-accounts-ui';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    WordComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    LanguageDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AccountsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
