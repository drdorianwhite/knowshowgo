import {Mongo} from "meteor/mongo";

interface ItemMetaDatum {
    name: string;
    valueType: string;
    valString: string;
    valNumber: number;
    valDateTime: Date;
    valCategory: Mongo.ObjectID;
    valTopic: Mongo.ObjectID;
    valUser: Mongo.ObjectID;
    valURL: string;
    valGeodata: any;
}

interface UserTopicListItem {
    itemid: Mongo.ObjectID;
    metadata: ItemMetaDatum[];
}

interface UserTopicList {
    name: string;
    items: UserTopicListItem[];
}

export interface User {
    _id: Mongo.ObjectID;
    email: string;
    password: string;
    joinDate: Date;
    userName: string;
    firstName: string;
    lastName: string;
    mainPhotoURL: string;
    role: string;
    topicLists: UserTopicList[];
}
