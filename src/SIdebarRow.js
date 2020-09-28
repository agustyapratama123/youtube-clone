import React from "react";
import "./SidebarRow.css";
import HomeIcon from "@material-ui/icons/Home";

function SIdebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h5 className="sidebarRow__title">{title}</h5>
    </div>
  );
}

export default SIdebarRow;
