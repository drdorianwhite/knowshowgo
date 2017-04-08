import { MongoObservable } from "meteor-rxjs";
import {Category} from "../models/category.model";

export const CategoryCollection = new MongoObservable.Collection<Category>("categories");
