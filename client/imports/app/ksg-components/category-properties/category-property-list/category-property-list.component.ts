import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryPropertyDataService } from "../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../both/models/category-property.model";
import template from "./category-properties.component.html";
import style from "./category-properties.component.scss";

@Component({
  selector: "demo",
  template,
  styles: [ style ]
})
export class CategoryPropertyListComponent implements OnInit {
  greeting: string;
  data: Observable<CategoryProperty[]>;

  constructor(private categoryPropertyDataService: CategoryPropertyDataService) {
    this.greeting = "Hello Demo Component!";
  }

  ngOnInit() {
    this.data = this.categoryPropertyDataService.readAll().zone();
  }
}
