import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { FiveThreeOneSchema, PowerbbSchema } from "./subSchemas";
import './powerbbMethods';
import './531Methods';
import './notesMethods';

export const WeightSettings = new Mongo.Collection("weightSettings");

const WeightSettingsSchema = new SimpleSchema({
  user: {
    type: String,
    required: false
  },
  overheadMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  squatMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  benchMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  deadliftMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  lastUpdated: {
    type: Date,
    defaultValue: new Date()
  },
  powerbb: {
    type: PowerbbSchema, //subschema
    required: false,
    defaultValue: {}
  },
  fivethreeone: {
    type: FiveThreeOneSchema, //subschema
    required: false,
    defaultValue: {}
  }
});

WeightSettings.attachSchema(WeightSettingsSchema);

if (Meteor.isServer) {
  Meteor.publish("allWeights", function() {
    return WeightSettings.find({ user: Meteor.userId() });
  });
}
