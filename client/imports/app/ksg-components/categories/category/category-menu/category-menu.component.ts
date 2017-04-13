import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryDataService } from "../../../../ksgapi-services/category.service";
import { Category } from "../../../../../../../both/models/category.model";
import template from "./category-properties.component.html";
import style from "./category-properties.component.scss";

@Component({
  selector: "category-menu",
  template,
  styles: [ style ]
})
export class CategoryMenuComponent implements OnInit {
  id: string;

  constructor() {
  }

  ngOnInit() {
    
  }
}
