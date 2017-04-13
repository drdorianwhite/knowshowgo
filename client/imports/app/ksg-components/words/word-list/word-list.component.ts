import { Component, OnInit, Input} from "@angular/core";
import { Observable } from "rxjs";
import { WordDataService } from "../../../ksgapi-services/word.service";
import { Word } from "../../../../../../both/models/word.model";
import template from "./word-list.component.html";
import style from "./word-list.component.scss";

@Component({
  selector: "word-list",
  template,
  styles: [ style ]
})
export class WordListComponent implements OnInit {
  @Input() data: Observable<Word[]>;

  constructor(private wordDataService: WordDataService) {
  }

  ngOnInit() {    
    this.data = this.wordDataService.readAll({ }).zone();
  }
}
