import { Meteor } from "meteor/meteor";
import { WeightSettings } from "./weightSettings";

if (Meteor.isServer) {
  Meteor.methods({
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
      const programArr = program.split(".");
      let id;
      if (Meteor.user()) {
        id = WeightSettings.insert({
          user: userId,
          [programArr[0]]: {
            [programArr[1]]: notes
          },
          lastUpdated: new Date()
        });
      } else if (!Meteor.user()) {
        id = WeightSettings.insert({
          [programArr[0]]: {
            [programArr[1]]: notes
          },
          lastUpdated: new Date()
        });
      }
      return id;
    }
  });
}
