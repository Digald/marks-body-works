import React, { Component } from "react";
// import components
import SectionTitle from "./SectionTitle";

class ProgramDescriptions extends Component {
  render() {
    return (
      <div className="Program-Descriptions">
        <SectionTitle title="Why You Should Read This Page Before Starting" />
        <p>
          If you look though the programs, you'll notice they may or may not be
          very intuitive at first. The descriptions of each program will go into
          the workout portion as well as what your calorie intake should look
          like. All programs have a notes sections to write your numbers and
          keep track of your progress.
        </p>
        <SectionTitle title="How To Use Power BB" />
        <p>
          It's important to note that this program is based on Mike o'Hearn's
          Power Bodybuilding. I figured I don't want to explicitly use the same
          name because my version may vary slightly
        </p>
        <h3>Diet</h3>
        <p>
          This program is known as a "cutting" program. Since these programs are
          for intermediate lifters already, you should have an idea of what your
          TDE is already.
        </p>
        <p>
          This is a 12-week program and it is divided into three phases. For the
          first four weeks, you should increase your daily calorie count by 500.
          The next four weeks, 5-8, you take away the 500 extra calories you
          added previously. For the final four weeks, You should be removing an
          additional 500 daily calorie to finish off the program.
        </p>
        <h3>Program</h3>
        <p>
          The lifts follow a similar schedule to the diet. The first four weeks
          of the program, all of your main lifts will be 70% of your 1 rep max.
          You do them for 5 sets of 4 reps, or depicted as 5x4 on the program
          page. Weeks 5-9, all of your main lifts will be 80% of your 1 rep max.
          This time you only do 5 sets of 3 reps. Lastly, you do 90% of your 1
          rep max on the final four weeks only doing 5 sets of 2 reps.
        </p>
        <p>
          Other accessory weight amounts are up to you as long as you follow the
          set and rep ranges. You should have an idea of what your own ab and
          cardio routine should be. In the original program, you add more cardio
          in each phase, but I feel this is up to you, as long as you are
          consistant.
        </p>
        <SectionTitle title="How To Use 5/3/1 Simples Template" />
        <p>
          Similar to Power Bodybuilding, this program is based off of Wender's
          5/3/1 Simplest Template. There may have been some variations in my
          program which is why I will just call it 5/3/1 Simplest Template.
        </p>
        <p>
          A cycle of this program is 4 weeks. If you are succesful in those four
          weeks, you may increase your maxes by 5lbs and repeat.
        </p>
        <h3>Diet</h3>
        <p>
          The calorie forumla for this program can be up to your goals. I know
          this program is described as a raw strength building program. With
          that said, it would probably be best to consume an excess amount of
          calories compared to your TDE. Although I can also find it reasonable
          to keep your calorie count at a solid maintenance based on your TDE
          and continue to perform although I'm sure you'll get the most out of
          the program by eating.
        </p>
        <h3>Program</h3>
        <p>
          5/3/1 is only a four week cycle. Each day is going to start off with
          one of your main lifts. For these lifts, you take your 1 rep max, and
          then use 90% of it as your training max. The first week, you will
          perform 3 sets of 5 reps with the last rep being as many as possible
          as long as you get 5. The second week you will perform 3 sets of 3
          reps with the last being as many as possible as long as you get 3.
        </p>
        <p>
          The third week is supposed to be your toughest. You will perform 3
          sets of 5 reps, 3 reps, and then a final rep of 1 or as many as
          possible. If succesful you can chose to increase your maxes for next
          week. However, you still have one final week which is your deload.
          This is where you do 3 sets of 5 reps at a reduced weights. This
          applications calculates everything for you.
        </p>
        <p>
          Secondary Lifts follow a similar pattern as your main lifts. The
          applications will caclulate what weights and reps you need to perform
          for each exercise. In addition to your main lifts and accessory lifts,
          there are accessory exercises that you determine the weights for. You
          just have to follow the rep schemes.
        </p>
      </div>
    );
  }
}

export default ProgramDescriptions;
