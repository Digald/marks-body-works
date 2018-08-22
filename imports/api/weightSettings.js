import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const WeightSettings = new Mongo.Collection("weightSettings");

const PowerbbSchema = new SimpleSchema({
  workoutWeek: {
    type: String,
    required: false
  }
});

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
    type: PowerbbSchema,
    required: false
  }
});

WeightSettings.attachSchema(WeightSettingsSchema);

if (Meteor.isServer) {
  Meteor.publish("allWeights", function() {
    return WeightSettings.find({});
  });

  Meteor.methods({
    async insertRepMaxes(overheadMax, benchMax, squatMax, deadliftMax) {
      await WeightSettings.insert({
        overheadMax,
        benchMax,
        squatMax,
        deadliftMax,
        lastUpdated: new Date()
      });
    }
  });
}
