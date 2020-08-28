import React,{useState} from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import classes from './Search.module.css'
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People"
import { useHistory } from "react-router-dom";

function Seach() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // const [selected, setSelection] = useState('selection')
  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <div className={classes.search}>
      <DateRangePicker  ranges={[selectionRange]} onChange={handleSelect} />
      <h2 className={classes.search__h2}>
        Number of guests
        <PeopleIcon />
      </h2>
      <input
        className={classes.search__input}
        min={0}
        defaultValue={2}
        type="number"
      />
      <Button onClick={()=>{history.push('/search')}} className={classes.search__button}>Search Airbnb</Button>
    </div>
  );
}

export default Seach;
