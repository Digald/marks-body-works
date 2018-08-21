import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const WeightSettings = new Mongo.Collection("weightSettings");

const PowerbbSchema = new SimpleSchema({
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
  workoutWeek: String,
  lastUpdated: {
    type: Date,
    defaultValue: new Date()
  }
});

const WeightSettingsSchema = new SimpleSchema({
  user: {
      type: String,
      required: false
  },
  powerbb: PowerbbSchema
});

WeightSettings.attachSchema(WeightSettingsSchema);

if (Meteor.isServer) {
  Meteor.publish("allWeights", function() {
    return WeightSettings.find({});
  });
}
