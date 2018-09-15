import SimpleSchema from "simpl-schema";

/*
Subschemas that will be used in the parent schema, WeightSettings.
*/

export const PowerbbSchema = new SimpleSchema({
  workoutWeek: {
    type: String,
    defaultValue: "Week 1 Phase 1",
    required: false
  },
  shoulderText: {
    type: String,
    defaultValue: "SHOULDER notes",
    required: false
  },
  legText: {
    type: String,
    defaultValue: "LEGS notes",
    required: false
  },
  armText: {
    type: String,
    defaultValue: "ARMS notes",
    required: false
  },
  chestText: {
    type: String,
    defaultValue: "CHEST notes",
    required: false
  },
  backText: {
    type: String,
    defaultValue: "BACK notes",
    required: false
  }
});

export const FiveThreeOneSchema = new SimpleSchema({
  workoutWeek: {
    type: String,
    defaultValue: "5 / 5 / 5"
  },
  closeGripBenchMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  sumoDeadliftMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  inclineBenchMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  frontSquatMax: {
    type: SimpleSchema.Integer,
    defaultValue: 0
  },
  shoulderText: {
    type: String,
    defaultValue: "SHOULDER notes",
    required: false
  },
  legText: {
    type: String,
    defaultValue: "LEGS notes",
    required: false
  },
  chestText: {
    type: String,
    defaultValue: "CHEST notes",
    required: false
  },
  backText: {
    type: String,
    defaultValue: "BACK notes",
    required: false
  }
});
