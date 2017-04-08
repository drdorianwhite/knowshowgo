import {Word} from "../models/word.model";
import {User} from "../models/user.model";

export interface CategoryProperty {
  names: [{
        word: {
            type: Mongo.ObjectID,
            ref: Word
        },
        nameApproval: [{
    vote: Number,
    voter: {
        type: typeof Mongo.ObjectID,
        ref: User
    },
    votedAt: Date
}],
        creationInfo: {
    author: {
        type: Mongo.ObjectID,
        ref: User
    },
    createdAt: Date,
    message: String
}
    }],
    dataType: {
        type: String,
        enum: [
            "String",
            "Number",
            "Date",
            "TimeSpan",
            "Category",
            "Topic",
            "User",
            "URL",
            "Geodata",
            "Rating"
        ],
    },
    isArray: Boolean,
    isOrderedArray: Boolean,
    hasNamedElements: Boolean,
    topicCategoryId: Mongo.ObjectID,
    dataConstraints: [any],
    author: User,
    creationDate: Date,
    propertyApproval: [{
    vote: Number,
    voter: {
        type: typeof Mongo.ObjectID,
        ref: User
    },
    votedAt: Date
}]
}
