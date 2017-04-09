import {Mongo} from "meteor/mongo";
import {User} from "../models/user.model";
import {Language} from "../models/language.model";

export interface PostInfo {
    author: Mongo.ObjectID;
    createdAt: Date;
    message: string;
}


export interface Vote {
    vote: number;
    voter: Mongo.ObjectID;
    votedAt: Date;
}

export interface PostedName {
    word: Mongo.ObjectID;
    nameApproval: Vote[];
    creationInfo: PostInfo;
}

export interface PostedParent {
    parent: Mongo.ObjectID;
    nameApproval: Vote[];
    creationInfo: PostInfo;
}

export interface PostedCategoryProperty {
    categoryProperty: Mongo.ObjectID;
    nameApproval: Vote[];
    creationInfo: PostInfo;
}

export interface PostedTopicType {
    category: Mongo.ObjectID;
    categoryApproval: Vote[];
    creationInfo: PostInfo;
}

export interface PropertyValue { //holds single value or if array then multiple values
    valueString: String;
    valueNumber: Number;
    valueDate: Date;
    valueURL: String;
    valueTopic: Mongo.ObjectID;
    valueCategory: Mongo.ObjectID;
    valueGeodata: any;
    valueRating: Vote[];
    creationInfo: PostInfo;
}

export interface PostedTopicProperty {
    property: Mongo.ObjectID;
    propertyApproval: Vote[];
    creationInfo: PostInfo;
    propertyValues: PropertyValue[];
}

interface MessageBoardTopic {
    posts: PostInfo[];
    subject: string;
}

export interface TopicDiscussionBoard {
    messageBoardTopics: MessageBoardTopic[];
}