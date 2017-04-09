import {Mongo} from "meteor/mongo";
import {User} from "../models/user.model";
import {Language} from "../models/language.model";
import {Vote} from "../models/helper-types";

export interface Word {
    _id: Mongo.ObjectID;
    spelling: String;
    language: Mongo.ObjectID;
    wordApproval: Vote[];
}


