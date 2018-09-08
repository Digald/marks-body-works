import { Meteor } from "meteor/meteor";
import { WeightSettings } from "./weightSettings";

if (Meteor.isServer) {
  Meteor.methods({
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
    }
  });
}
