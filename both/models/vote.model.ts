import {Mongo} from "meteor/mongo";
import {User} from "../models/user.model";
import {Language} from "../models/language.model";

export interface Vote {
    vote: number;
    voter: Mongo.ObjectID;
    votedAt: Date;
}
