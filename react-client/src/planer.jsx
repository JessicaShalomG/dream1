import React from 'react';
import Maps from "./planer/map.js";
import TodoList from "./planer/TodoList.js";
import Calendar from "./Calendar/indexCalendar.js";


class Planer extends React.Component {

  render () {
    return (
        <div>
          <h1>this is the planner</h1>
            <div className="row">

           <div className="col-sm-5"><TodoList /></div>
           <Calendar />
         </div>

           </div>
    )
  }
}
export default Planer;
