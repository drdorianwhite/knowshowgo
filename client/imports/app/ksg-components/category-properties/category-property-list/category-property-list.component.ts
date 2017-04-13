import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryPropertyDataService } from "../../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../../both/models/category-property.model";
import template from "./category-property-list.component.html";
import style from "./category-property-list.component.scss";

@Component({
  selector: "category-property-list",
  template,
  styles: [ style ]
})
export class CategoryPropertyListComponent implements OnInit {
  @Input() data: Observable<CategoryProperty[]>;

  constructor(private categoryPropertyDataService: CategoryPropertyDataService) {
    //this.data = this.categoryPropertyDataService.readAll({});
  }

  ngOnInit() {
    //this.data = this.categoryPropertyDataService.readAll({}).zone();
  }
}
