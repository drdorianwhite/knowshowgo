import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryDataService } from "../../../ksgapi-services/category.service";
import { Category } from "../../../../../../both/models/category.model";
import template from "./new-category.component.html";
import style from "./new-category.component.scss";
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Component({
  selector: "new-category",
  template,
  styles: [ style ]
})
export class NewCategoryComponent implements OnInit {
  private data: Observable<Category>;
  private _data: Category;
  private searchData: Observable<Category[]>;
  private resultsFetched: Boolean;
  private dataService: CompleterData;
  private searchString: string;
  constructor(private categoryDataService: CategoryDataService, private completerService: CompleterService) {
    this.resultsFetched = false;
    this.create();
    // initialize with observable
    this.dataService = this.completerService.local(this.searchData , 'spelling',  'spelling');

  }

  lookup(event){
     if(this.searchString && this.searchString.length > 2 && !this.resultsFetched){
          this.searchData = this.categoryDataService.readAll({"namesLike":this.searchString});
          this.resultsFetched = true;
        }else{
           // reset "resultsfetched" when input is less than 3 chars.
            this.resultsFetched = false;
     }
  }

  create() {
    this.data = this.categoryDataService.create();
  }

  update() {
    this.categoryDataService.update(this._data);
  }

  selectedItem(selected : CompleterItem) {
    //just console for now.
    console.log(selected);
  }

  ngOnInit() {    
    //this.languages = this.languageDataService.readAll().zone();
  }
}
