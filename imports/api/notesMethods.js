import { Meteor } from "meteor/meteor";
import { WeightSettings } from "./weightSettings";

if (Meteor.isServer) {
  Meteor.methods({
    /*
    -------------------------------------------METHODS FOR NOTES
    */

    /**
     * Updates user notes into database.
     * @param {string} notes Whatever the user has written for personal refernce.
     * @param {string} program For what program and lift the note should be inserted.
     * @param {string} userId Id to identify what user this data belongs to.
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

    /**
     * Updates user notes from local storage to database.
     * @param {string} notes Whatever the user has written for personal refernce.
     * @param {string} program For what program and lift the note should be inserted.
     * @param {string} weightSettingsId Id to identify what document this data belongs to.
     */
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

    /**
     * Inserts user notes into database.
     * @param {string} notes Whatever the user has written for personal refernce.
     * @param {string} program For what program and lift the note should be inserted.
     * @param {string} userId Id to identify what user this data belongs to.
     * @return {string} The id of the newly inserted document.
     */
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
