import { Meteor } from "meteor/meteor";
import { WeightSettings } from "./weightSettings";

if (Meteor.isServer) {
  Meteor.methods({
    /*
    insert secondary maxes for 5/3/1 program 
    */

    /**
     * Inserts secondary max lifts into database.
     * @param {integer} frontSquatMax weight number to be inserted.
     * @param {integer} closeGripBenchMax weight number to be inserted.
     * @param {integer} sumoDeadliftMax weight number to be inserted.
     * @param {integer} inclineBenchMax weight number to be inserted.
     * @param {string} userid Id to identify what user this data belongs to.
     * @return {string} The id of the newly inserted document.
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

    /**
     * Updates secondary max lifts into database for user.
     * @param {integer} frontSquatMax weight number to be inserted.
     * @param {integer} closeGripBenchMax weight number to be inserted.
     * @param {integer} sumoDeadliftMax weight number to be inserted.
     * @param {integer} inclineBenchMax weight number to be inserted.
     * @param {string} userid Id to identify what user this data belongs to.
     */
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

    /**
     * Updates secondary max lifts into database for local storage.
     * @param {integer} frontSquatMax weight number to be inserted.
     * @param {integer} closeGripBenchMax weight number to be inserted.
     * @param {integer} sumoDeadliftMax weight number to be inserted.
     * @param {integer} inclineBenchMax weight number to be inserted.
     * @param {string} weightSettingsId Id to identify what document this data belongs to.
     */
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

    /**
     * Inserts the week of the program into database.
     * @param {string} week The week the user is wanting to insert into the database.
     * @param {string} userid Id to identify what user this data belongs to.
     * @return {string} The id of the newly inserted document.
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

    /**
     * Updates the week of the program into database for user.
     * @param {string} week The week the user is wanting to insert into the database.
     * @param {string} userid Id to identify what user this data belongs to.
     */
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

    /**
     * Updates the week of the program into database for user.
     * @param {string} week The week the user is wanting to insert into the database.
     * @param {string} weightSettingsId Id to identify what document this data belongs to.
     */
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
    }
  });
}
