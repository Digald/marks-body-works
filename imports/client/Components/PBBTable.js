import React, { Component } from "react";

class PBBTable extends Component {
  render() {
    return (
      <table className="PBBTable">
        <thead>
          <tr>
            <th>Day 1 (Shoulders)</th>
            <th>Day 2 (Legs)</th>
            <th>Day 3 (Arms)</th>
            <th>Day 4 (Chest)</th>
            <th>Day 5 (Back)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Overhead Press</td>
            <td>Squat</td>
            <td>Bicep Curl</td>
            <td>Bench Press</td>
            <td>Deadlift</td>
          </tr>
          <tr>
            <td>Side Lateral Raise</td>
            <td>Hamstring Curl</td>
            <td>Hammer Curl</td>
            <td>Incline Dumbell Press</td>
            <td>Dumbell Rows</td>
          </tr>
          <tr>
            <td>Rear Deltoid Raise</td>
            <td>Leg Extension</td>
            <td>Preacher Curl</td>
            <td>Incline Dumbell Fly</td>
            <td>Lat Pulldown</td>
          </tr>
          <tr>
            <td>Personal Ab Routine</td>
            <td>Personal Ab Routine</td>
            <td>Laying Tricep Extension</td>
            <td>Personal Ab Routine</td>
            <td>Personal Ab Routine></td>
          </tr>
          <tr>
            <td>HIIT Cardio Routine</td>
            <td>HIIT Cardio Routine</td>
            <td>Straight Bar Tripcep Pushdown</td>
            <td>HIIT Cardio Routine</td>
            <td>HIIT Cardio Routine</td>
          </tr>
          <tr>
            <td />
            <td />
            <td>Tripcep Kickbacks</td>
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>Personal Ab Routine</td>
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>HIIT Cardio Routine</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PBBTable;
