import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryPropertyDataService } from "../../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../../both/models/category-property.model";
import template from "./category-properties.component.html";
import style from "./category-properties.component.scss";

@Component({
  selector: "category-property",
  template,
  styles: [ style ]
})
export class CategoryPropertyComponent implements OnInit {
  id: string;
  data: Observable<CategoryProperty>;

  constructor(private categoryPropertyDataService: CategoryPropertyDataService) {
    //this.id = this.categoryPropertyDataService.read().subscribe()
  }

  ngOnInit() {
    this.data = this.categoryPropertyDataService.read(this.id).zone();
  }
}
