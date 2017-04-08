import { MongoObservable } from "meteor-rxjs";
import {Topic} from "../models/topic.model";

export const TopicCollection = new MongoObservable.Collection<Topic>("topics");
