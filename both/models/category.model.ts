import {Word} from "../models/word.model";
import {User} from "../models/user.model";
import {CategoryProperty} from "../models/category-property.model";
import {Vote, PostInfo, PostedName, PostedParent, PostedCategoryProperty} from "../models/helper-types";


export interface Category {
    _id: Mongo.ObjectID;
    names: PostedName[];
    parents: PostedParent[];
    properties: PostedCategoryProperty[];
    categoryApproval: Vote[];
    creationInfo: PostInfo;
    canCreateTopicFrom: Boolean;
    appSchema: Boolean;
    parentAppSchemaVersion:Mongo.ObjectID;
    firstAppSchemaVersion:Mongo.ObjectID;
}
