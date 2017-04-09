import {Word} from "../models/word.model";
import {User} from "../models/user.model";
import {CategoryProperty} from "../models/category-property.model";
import {Vote, PostInfo, PostedName, PostedParent, PostedTopicType, PostedTopicProperty, TopicDiscussionBoard} from "../models/helper-types";
import {Category} from "../models/category.model";

export interface Topic {
    _id: Mongo.ObjectID;
    names: PostedName[];
    is: PostedTopicType[];
    has: PostedTopicProperty[];
    topicApproval: Vote[];
    creationInfo: PostInfo;
    topicDiscussionBoard: TopicDiscussionBoard;
}
