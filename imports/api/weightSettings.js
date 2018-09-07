import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { FiveThreeOneSchema, PowerbbSchema } from "./subSchemas";

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

  Meteor.methods({
    /*
    -------------------------------------------METHODS FOR POWER BB 
    */

    /*
    insert maxes
    */
    insertRepMaxes(overheadMax, benchMax, squatMax, deadliftMax, userid) {
      let id;
      if (Meteor.user()) {
        id = WeightSettings.insert({
          user: userid,
          overheadMax,
          benchMax,
          squatMax,
          deadliftMax,
          lastUpdated: new Date()
        });
      } else if (!Meteor.user()) {
        id = WeightSettings.insert({
          overheadMax,
          benchMax,
          squatMax,
          deadliftMax,
          lastUpdated: new Date()
        });
      }
      return id;
    },

    updateRepMaxForUser(overheadMax, benchMax, squatMax, deadliftMax, userid) {
      WeightSettings.update(
        { user: userid },
        {
          $set: {
            overheadMax,
            benchMax,
            squatMax,
            deadliftMax,
            lastUpdated: new Date()
          }
        }
      );
    },

    updateRepMaxLocalStorage(
      overheadMax,
      benchMax,
      squatMax,
      deadliftMax,
      weightSettingsId
    ) {
      WeightSettings.update(
        { _id: weightSettingsId },
        {
          $set: {
            overheadMax,
            benchMax,
            squatMax,
            deadliftMax,
            lastUpdated: new Date()
          }
        }
      );
    },

    /*
    Week of Powerbb program 
    */

    insertWeekOfProgramPowerbb(week, userId) {
      let id;
      if (Meteor.user()) {
        id = WeightSettings.insert({
          user: userId,
          powerbb: {
            workoutWeek: week
          },
          lastUpdated: new Date()
        });
      } else if (!Meteor.user()) {
        id = WeightSettings.insert({
          powerbb: {
            workoutWeek: week
          },
          lastUpdated: new Date()
        });
      }
      return id;
    },

    updateWeekOfUser(week, userId) {
      WeightSettings.update(
        { user: userId },
        {
          $set: {
            "powerbb.workoutWeek": week,
            lastUpdated: new Date()
          }
        }
      );
    },

    updateWeekOfStorage(week, weightSettingsId) {
      WeightSettings.update(
        { _id: weightSettingsId },
        {
          $set: {
            "powerbb.workoutWeek": week,
            lastUpdated: new Date()
          }
        }
      );
    },

    /*
    --------------------------------------------METHODS FOR 5/3/1
    */

    /*
    insert secondary maxes for 5/3/1 program 
    */

    insertSecondaryMaxes(
      frontSquatMax,
      closeGripBenchMax,
      sumoDeadliftMax,
      inclineBenchMax,
      userid
    ) {
      let id;
      if (Meteor.user()) {
        id = WeightSettings.insert({
          user: userid,
          fivethreeone: {
            frontSquatMax,
            closeGripBenchMax,
            sumoDeadliftMax,
            inclineBenchMax
          },
          lastUpdated: new Date()
        });
      } else if (!Meteor.user()) {
        id = WeightSettings.insert({
          fivethreeone: {
            frontSquatMax,
            closeGripBenchMax,
            sumoDeadliftMax,
            inclineBenchMax
          },
          lastUpdated: new Date()
        });
      }
      return id;
    },

    updateSecondaryMaxForUser(
      frontSquatMax,
      closeGripBenchMax,
      sumoDeadliftMax,
      inclineBenchMax,
      userid
    ) {
      WeightSettings.update(
        { user: userid },
        {
          $set: {
            "fivethreeone.frontSquatMax": frontSquatMax,
            "fivethreeone.closeGripBenchMax": closeGripBenchMax,
            "fivethreeone.sumoDeadliftMax": sumoDeadliftMax,
            "fivethreeone.inclineBenchMax": inclineBenchMax,
            lastUpdated: new Date()
          }
        }
      );
    },

    updateSecondaryMaxLocalStorage(
      frontSquatMax,
      closeGripBenchMax,
      sumoDeadliftMax,
      inclineBenchMax,
      weightSettingsId
    ) {
      WeightSettings.update(
        { _id: weightSettingsId },
        {
          $set: {
            "fivethreeone.frontSquatMax": frontSquatMax,
            "fivethreeone.closeGripBenchMax": closeGripBenchMax,
            "fivethreeone.sumoDeadliftMax": sumoDeadliftMax,
            "fivethreeone.inclineBenchMax": inclineBenchMax,
            lastUpdated: new Date()
          }
        }
      );
    },

    /*
    Week of 5/3/1 program 
    */

    insertWeekOfProgramFiveThreeOne(week, userId) {
      let id;
      if (Meteor.user()) {
        id = WeightSettings.insert({
          user: userId,
          fivethreeone: { workoutWeek: week },
          lastUpdated: new Date()
        });
      } else if (!Meteor.user()) {
        id = WeightSettings.insert({
          fivethreeone: { workoutWeek: week },
          lastUpdated: new Date()
        });
      }
      return id;
    },

    updateWeekOfUserFiveThreeOne(week, userId) {
      WeightSettings.update(
        { user: userId },
        {
          $set: {
            "fivethreeone.workoutWeek": week,
            lastUpdated: new Date()
          }
        }
      );
    },

    updateWeekOfStorageFiveThreeOne(week, weightSettingsId) {
      WeightSettings.update(
        { _id: weightSettingsId },
        {
          $set: {
            "fivethreeone.workoutWeek": week,
            lastUpdated: new Date()
          }
        }
      );
    },

    /*
    -------------------------------------------METHODS FOR NOTES
    */

    updateNotesUser(notes, program, userId) {
      WeightSettings.update(
        { user: userId },
        {
          $set: {
            [program]: notes,
            lastUpdated: new Date()
          }
        }
      );
    },

    updateNotesStorage(notes, program, weightSettingsId) {
      WeightSettings.update(
        { _id: weightSettingsId },
        {
          $set: {
            [program]: notes,
            lastUpdated: new Date()
          }
        }
      );
    },

    insertNotes(notes, program, userId) {
      let id;
      if (Meteor.user()) {
        id = WeightSettings.insert({
          user: userId,
          [program]: notes,
          lastUpdated: new Date()
        });
      } else if (!Meteor.user()) {
        id = WeightSettings.insert({
          [program]: notes,
          lastUpdated: new Date()
        });
      }
      return id;
    }
  }); //end of Meteor.methods
}
