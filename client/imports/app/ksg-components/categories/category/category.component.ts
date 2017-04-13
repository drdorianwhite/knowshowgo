import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryDataService } from "../../../ksgapi-services/category.service";
import { Category } from "../../../../../../both/models/category.model";
import template from "./category.component.html";
import style from "./category.component.scss";

@Component({
  selector: "category",
  template,
  styles: [ style ]
})
export class CategoryComponent implements OnInit {
  @Input() id: string;
  data: Observable<Category>;
  category: Category;

  constructor(private categoryDataService: CategoryDataService) {
    this.data = this.categoryDataService.read(this.id);
  }

  update() {
    this.categoryDataService.update(this.category);
  }

  ngOnInit() {
    this.data = this.categoryDataService.read(this.id).zone();
  }
}
