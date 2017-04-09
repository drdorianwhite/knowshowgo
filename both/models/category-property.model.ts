import {Word} from "../models/word.model";
import {User} from "../models/user.model";
import {Mongo} from "meteor/mongo";
import {Vote, PostInfo, PostedName} from "../models/helper-types";



export interface CategoryProperty {
    names: PostedName[];
    dataType: string;
    isArray: Boolean;
    isOrderedArray: Boolean;
    hasNamedElements: Boolean;
    topicCategoryId: Mongo.ObjectID;
    dataConstraints: [any],
    author: Mongo.ObjectID,
    creationDate: Date,
    propertyApproval: Vote[];
}
