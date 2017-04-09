import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DemoDataService } from "../../ksgapi-services/category-property.service";
import { CategoryProperty } from "../../../../../both/models/category-property.model";
import template from "./category-properties.component.html";
import style from "./category-properties.component.scss";

@Component({
  selector: "demo",
  template,
  styles: [ style ]
})
export class DemoComponent implements OnInit {
  greeting: string;
  data: Observable<Demo[]>;

  constructor(private demoDataService: DemoDataService) {
    this.greeting = "Hello Demo Component!";
  }

  ngOnInit() {
    this.data = this.demoDataService.getData().zone();
  }
}
