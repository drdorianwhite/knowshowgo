import {Mongo} from "meteor/mongo";


export interface User {
    email: String,
    password: String,
    joinDate: Date,
    userName: String,
    firstName: String,
    lastName: String,
    mainPhotoURL: String,
    role: {
        type: String,
        enum: [
            "nonmember",
            "banned",
            "basic",
            "level-1",
            "level0",
            "level1",
            "level2",
            "level3",
            "level4",
            "level5",
            "moderator",
            "admin",
            "superuser"
        ],
    },
    topicLists: [{
      name: String,
      items: [{
        itemid: Mongo.ObjectID,
        metadata: [{
            name: String,
            valueType: {
                type: String,
                enum: [
                    "String",
                    "Number",
                    "Date",
                    "Category",
                    "Topic",
                    "User",
                    "URL",
                    "Geodata"
                ]
            },
            valString: String,
            valNumber: Number,
            valDateTime: Date,
            valCategory: Mongo.ObjectID,
            valTopic: Mongo.ObjectID,
            valUser: Mongo.ObjectID,
            valURL: String,
            valGeodata: any
        }]
    }]
}
