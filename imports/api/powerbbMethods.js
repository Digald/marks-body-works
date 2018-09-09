import { Meteor } from "meteor/meteor";
import { WeightSettings } from "./weightSettings";

if (Meteor.isServer) {
  Meteor.methods({
    /*
    insert maxes
    */

    /**
     * Inserts max lifts into database
     * @param {integer} overheadMax weight number to be inserted.
     * @param {integer} benchMax weight number to be inserted.
     * @param {integer} squatMax weight number to be inserted.
     * @param {integer} deadliftMax weight number to be inserted.
     * @param {string} userid Id to identify what user this data belongs to.
     * @return {string} The id of the newly inserted document.
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

    /**
     * Updates max weights for a defined user in database.
     * @param {integer} overheadMax weight number to be inserted.
     * @param {integer} benchMax weight number to be inserted.
     * @param {integer} squatMax weight number to be inserted.
     * @param {integer} deadliftMax weight number to be inserted.
     * @param {string} userid Id to identify what user this data belongs to.
     */
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

    /**
     * Updates max weights from local storage in database.
     * @param {integer} overheadMax weight number to be inserted.
     * @param {integer} benchMax weight number to be inserted.
     * @param {integer} squatMax weight number to be inserted.
     * @param {integer} deadliftMax weight number to be inserted.
     * @param {string} weightSettingsId Id to identify what document this data belongs to.
     */
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

    /**
     * Inserts the week of the program into database
     * @param {string} week The week the user is wanting to insert into the database.
     * @param {string} userid Id to identify what user this data belongs to.
     * @return {string} The id of the newly inserted document.
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

    /**
     * Updates the week of the program into database for a user.
     * @param {string} week The week the user is wanting to insert into the database.
     * @param {string} userid Id to identify what user this data belongs to.
     */
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

    /**
     * Updates the week of the program into database from local storage.
     * @param {string} week The week the user is wanting to insert into the database.
     * @param {string} weightSettingsId Id to identify what document this data belongs to.
     */
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
