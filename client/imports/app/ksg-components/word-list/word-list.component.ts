import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WordDataService } from "../../ksgapi-services/word.service";
import { Word } from "../../../../../both/models/word.model";
import template from "./word-list.component.html";
import style from "./word-list.component.scss";

@Component({
  selector: "word-list",
  template,
  styles: [ style ]
})
export class WordListComponent implements OnInit {
  greeting: string;
  languages: Observable<Word[]>;

  constructor(private languageDataService: WordDataService) {
    this.greeting = "Hello Demo Component!";
  }

  ngOnInit() {    
    this.languages = this.languageDataService.readAll().zone();
  }
}
