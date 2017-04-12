import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryPropertyDataService } from "../../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../../both/models/category-property.model";
import template from "./word.component.html";
import style from "./word.component.scss";
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Component({
  selector: "new-word",
  template,
  styles: [ style ]
})
export class NewWordComponent implements OnInit {
  private searchData: Observable<CategoryProperty>;
  private resultsFetched: Boolean;
  private dataService: CompleterData;
  private searchString: string;
  constructor(private categoryPropertyDataService: CategoryPropertyDataService, private completerService: CompleterService) {
    this.resultsFetched = false;
    // initialize with observable
    this.dataService = this.completerService.local(this.searchData , 'spelling',  'spelling');

  }

  lookupWords(event){
     if(this.searchString && this.searchString.length > 2 && !this.resultsFetched){
          this.searchData = this.categoryPropertyDataService.readAll(this.searchString);
          this.resultsFetched = true;
        }else{
           // reset "resultsfetched" when input is less than 3 chars.
            this.resultsFetched = false;
     }
  }

  selectedItem(selected : CompleterItem) {
    //just console for now.
    console.log(selected);
  }

  ngOnInit() {    
    //this.languages = this.languageDataService.readAll().zone();
  }
}
