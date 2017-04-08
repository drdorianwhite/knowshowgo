import { MongoObservable } from "meteor-rxjs";
import {Word} from "../models/word.model";

export const WordCollection = new MongoObservable.Collection<Word>("words");
