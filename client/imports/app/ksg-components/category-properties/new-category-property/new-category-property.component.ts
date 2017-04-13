import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryPropertyDataService } from "../../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../../both/models/category-property.model";
import template from "./new-category-property.component.html";
import style from "./new-category-property.component.scss";
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Component({
  selector: "new-category-property",
  template,
  styles: [ style ]
})
export class NewCategoryPropertyComponent implements OnInit {
  private data: Observable<CategoryProperty>;
  private searchData: Observable<CategoryProperty[]>;
  private resultsFetched: Boolean;
  private dataService: CompleterData;
  private searchString: string;
  constructor(private categoryPropertyDataService: CategoryPropertyDataService, private completerService: CompleterService) {
    this.resultsFetched = false;
    this.create();
    // initialize with observable
    this.dataService = this.completerService.remote(CategoryPropertyDataService.categoryPropertiesURL , 'names.word.spelling',  'names.word.spelling');
  }

  private lookup(event){
     if(this.searchString && this.searchString.length > 2 && !this.resultsFetched){
          this.searchData = this.categoryPropertyDataService.readAll({ "nameContains": this.searchString});
          this.resultsFetched = true;
        }else{
           // reset "resultsfetched" when input is less than 3 chars.
            this.resultsFetched = false;
     }
  }

  create() {
    this.data = this.categoryPropertyDataService.create(null);
  }

  selectedItem(selected : CompleterItem) {
    //just console for now.
    console.log(selected);
  }

  ngOnInit() {    
    //this.languages = this.languageDataService.readAll().zone();
  }
}
