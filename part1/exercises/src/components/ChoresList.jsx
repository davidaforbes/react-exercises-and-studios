import React from "react";
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Load Dishwasher","Empty Litterbox","Laundry"];

      return (
      <div>
         <h3 className = {classes.choresHeading}>Chore List</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ol>
      </div>
      );
   }  
}
export default ChoresList;