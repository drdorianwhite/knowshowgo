import {Word} from "../models/word.model";
import {User} from "../models/user.model";
import {CategoryProperty} from "../models/category-property.model";

export interface Category {
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
    parents: [{
      parent: {
        type: Mongo.ObjectID,
        ref: Category
    },
    "parentAssociationApproval": [{
    vote: Number,
    voter: {
        type: typeof Mongo.ObjectID,
        ref: User
    },
    votedAt: Date
}],
    "creationInfo":  {
    author: {
        type: Mongo.ObjectID,
        ref: User
    },
    createdAt: Date,
    message: String
}
    }],
    properties: [{
    categoryProperty: {
        type: Mongo.ObjectID,
        ref: CategoryProperty
    },
    propertyAssociationApproval: [{
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
    categoryApproval: [{
    vote: Number,
    voter: {
        type: typeof Mongo.ObjectID,
        ref: User
    },
    votedAt: Date
}],
    creationInfo:  {
    author: {
        type: Mongo.ObjectID,
        ref: User
    },
    createdAt: Date,
    message: String
},
    canCreateTopicFrom: Boolean,
    appSchema: Boolean, //makes this a private/locked category for applications (no voting editing of categories but topics may be created by others)
    parentAppSchemaVersion: {
        type: Mongo.ObjectID,
        ref: Category
    },
    firstAppSchemaVersion: {
        type: Mongo.ObjectID,
        ref: Category,
    }
}
