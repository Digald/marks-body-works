import SimpleSchema from "simpl-schema";

export const PowerbbSchema = new SimpleSchema({
    workoutWeek: {
      type: String,
      defaultValue: "Week 1 Phase 1"
    },
    shoulderText: {
      type: String,
      required: false
    },
    legText: {
      type: String,
      required: false
    },
    armText: {
      type: String,
      required: false
    },
    chestText: {
      type: String,
      required: false
    },
    backText: {
      type: String,
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
      required: false
    },
    legText: {
      type: String,
      required: false
    },
    armText: {
      type: String,
      required: false
    },
    chestText: {
      type: String,
      required: false
    },
    backText: {
      type: String,
      required: false
    }
  });