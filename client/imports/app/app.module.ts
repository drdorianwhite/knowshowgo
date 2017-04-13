import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WordComponent } from "./ksg-components/words/word/word.component";
import { NewWordComponent } from "./ksg-components/words/new-word/new-word.component";
import { WordListComponent } from "./ksg-components/words/word-list/word-list.component";
import { CategoryPropertyComponent } from "./ksg-components/category-properties/category-property/category-property.component";
import { NewCategoryPropertyComponent } from "./ksg-components/category-properties/new-category-property/new-category-property.component";
import { CategoryPropertyListComponent } from "./ksg-components/category-properties/category-property-list/category-property-list.component";
import { CategoryComponent } from "./ksg-components/categories/category/category.component";
import { CategoryMenuComponent } from "./ksg-components/categories/category/category-menu/category-menu.component";
import { NewCategoryComponent } from "./ksg-components/categories/new-category/new-category.component";
import { CategoryListComponent } from "./ksg-components/categories/category-list/category-list.component";
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
    NewWordComponent,
    CategoryPropertyComponent,
    NewCategoryPropertyComponent,
    CategoryPropertyListComponent,
    CategoryComponent,
    NewCategoryComponent,
    CategoryListComponent,
    CategoryMenuComponent
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
    Ng2CompleterModule,
    FormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
