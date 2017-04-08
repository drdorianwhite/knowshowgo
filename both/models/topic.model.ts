import {Word} from "../models/word.model";
import {User} from "../models/user.model";
import {CategoryProperty} from "../models/category-property.model";
import {Category} from "../models/category.model";

export interface Topic {
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
    is: [{
        type: Mongo.ObjectID,
        ref: Category
    }],
    has: [{
        property: {
            type: Mongo.ObjectID,
            ref: CategoryProperty
        },

        values: [{
            valueArray: [{ //holds single value or if array then multiple values
                valueString: String,
                valueNumber: Number,
                valueDate: Date,
                valueURL: String,
                valueObject: Mongo.ObjectID,
                valueGeodata: any,
                valueRating: [{
    vote: Number,
    voter: {
        type: typeof Mongo.ObjectID,
        ref: User
    },
    votedAt: Date
}],
                valueName: String //for named elements
            }],
            propertyValueApproval: [{
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

    }],
    topicApproval: [{
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
},
    topicDiscussionBoard: {
      messageBoardTopics: [{
    "posts": [ {
    author: {
        type: Mongo.ObjectID,
        ref: User
    },
    createdAt: Date,
    message: String
}],
    "subject": String
}]
}
}
