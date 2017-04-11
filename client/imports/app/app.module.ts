import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpModule, JsonpModule } from '@angular/http';
import { WordComponent } from "./ksg-components/word/word.component";
import { AddWordComponent } from "./ksg-components/add-word/add-word.component";
import { WordListComponent } from "./ksg-components/word-list/word-list.component";
import { Ng2CompleterModule } from "ng2-completer";
import { LanguageDataService } from "./ksgapi-services/language.service";
import { WordDataService } from "./ksgapi-services/word.service";
import { UserDataService } from "./ksgapi-services/user.service";
import { CategoryPropertyDataService } from "./ksgapi-services/category-property.service";
import { CategoryDataService } from "./ksgapi-services/category.service";
import { TopicDataService } from "./ksgapi-services/topic.service";
import { AccountsModule } from 'angular2-meteor-accounts-ui';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    WordComponent,
    WordListComponent,
    AddWordComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    LanguageDataService,
    WordDataService,
    UserDataService,
    CategoryPropertyDataService,
    CategoryDataService,
    TopicDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AccountsModule,
    Ng2CompleterModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
