import { MongoObservable } from "meteor-rxjs";
import {Language} from "../models/language.model";

export const LanguageCollection = new MongoObservable.Collection<Language>("languages");
