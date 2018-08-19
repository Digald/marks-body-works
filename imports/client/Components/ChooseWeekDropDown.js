import React, { Component } from "react";
import SectionTitle from "./SectionTitle";

class ChooseWeekDropDown extends Component {
  render() {
    return (
      <div className="ChooseWeekDropDown">
        <SectionTitle title={"Choose Week"} />
        <form>
          <select name="week">
            <option>Week 1 Phase 1</option>
            <option>Week 2 Phase 1</option>
            <option>Week 3 Phase 1</option>
            <option>Week 4 Phase 1</option>
            <option>Week 5 Phase 2</option>
            <option>Week 6 Phase 2</option>
            <option>Week 7 Phase 2</option>
            <option>Week 8 Phase 2</option>
            <option>Week 9 Phase 3</option>
            <option>Week 10 Phase 3</option>
            <option>Week 11 Phase 3</option>
            <option>Week 12 Phase 3</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ChooseWeekDropDown;
