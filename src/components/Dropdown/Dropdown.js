import {useState} from "react";

import DropdownList from "./DropdownList/DropdownList";

import classes from './Dropdown.module.css';


const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenuHandler = () => {
    setIsShow(!isShow);
  }

  return (
    <div className={classes['dropdown-wrapper']}>
      <div onClick={showMenuHandler} className={classes['dropdown-button']}>Account setting</div>
      {isShow && <DropdownList/>}
    </div>
  )
}

export default Dropdown;
