import {Mongo} from "meteor/mongo";
import {User} from "../models/user.model";
import {Language} from "../models/language.model";

export interface Word {
  spelling: String,
    language: {
        type: typeof Mongo.ObjectID,
        ref: Language
    },
    wordApproval: [{
    vote: Number,
    voter: {
        type: typeof Mongo.ObjectID,
        ref: User
    },
    votedAt: Date
}]
}


