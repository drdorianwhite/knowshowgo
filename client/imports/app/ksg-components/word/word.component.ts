import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LanguageDataService } from "../../ksgapi-services/language.service";
import { Language } from "../../../../../both/models/language.model";
import template from "./word.component.html";
import style from "./word.component.scss";

@Component({
  selector: "word",
  template,
  styles: [ style ]
})
export class WordComponent implements OnInit {
  greeting: string;
  languages: Observable<Language[]>;

  constructor(private languageDataService: LanguageDataService) {
    this.greeting = "Hello Demo Component!";
  }

  ngOnInit() {
    console.log("calling readAll");
    
    this.languages = this.languageDataService.readAll().zone();
  }
}
