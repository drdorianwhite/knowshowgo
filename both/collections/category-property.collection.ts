import { MongoObservable } from "meteor-rxjs";
import {CategoryProperty} from "../models/category-property.model";

export const CategoryPropertyCollection = new MongoObservable.Collection<CategoryProperty>("categoryproperties");
