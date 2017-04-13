import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryPropertyDataService } from "../../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../../both/models/category-property.model";
import template from "./category-property.component.html";
import style from "./category-property.component.scss";

@Component({
  selector: "category-property",
  template,
  styles: [ style ]
})
export class CategoryPropertyComponent implements OnInit {
  @Input() id: string;
  data: Observable<CategoryProperty>;

  constructor(private categoryPropertyDataService: CategoryPropertyDataService) {
    this.data = this.categoryPropertyDataService.read(this.id);
  }

  ngOnInit() {
    this.data = this.categoryPropertyDataService.read(this.id).zone();
  }
}
