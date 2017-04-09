import {Mongo} from "meteor/mongo";

export interface Language {
  _id: Mongo.ObjectID;
  englishName: string;
}
