import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WordDataService } from "../../ksgapi-services/word.service";
import { Word } from "../../../../../both/models/word.model";
import template from "./word.component.html";
import style from "./word.component.scss";

@Component({
  selector: "word",
  template,
  styles: [ style ]
})
export class WordComponent implements OnInit {
  data: Word;

  constructor(private WordDataService: WordDataService) {
    
  }

  ngOnInit() {    
    //this.languages = this.languageDataService.readAll().zone();
  }
}
