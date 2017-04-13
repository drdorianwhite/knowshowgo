import { Component, OnInit, Input} from "@angular/core";
import { Observable } from "rxjs";
import { CategoryDataService } from "../../../ksgapi-services/category.service";
import { Category } from "../../../../../../both/models/category.model";
import template from "./category-list.component.html";
import style from "./category-list.component.scss";

@Component({
  selector: "category-list",
  template,
  styles: [ style ]
})
export class CategoryListComponent implements OnInit {
  @Input() data: Observable<Category[]>;

  constructor(private categoryDataService: CategoryDataService) {
    this.data = this.categoryDataService.readAll({}).zone();
  }

  ngOnInit() {
    this.data = this.categoryDataService.readAll({}).zone();
  }
}
