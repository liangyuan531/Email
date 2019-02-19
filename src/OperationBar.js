import React from "react";
import { AppBar, Toolbar, Select, MenuItem, Checkbox } from "@material-ui/core";

const OperationBar = () => {
  return (
    <div className="operationBar">
      <Toolbar>
        <Checkbox />
        <Select displayEmpty>
          <MenuItem value={10}>newest first</MenuItem>
          <MenuItem value={20}>oldest first</MenuItem>
          <MenuItem value={30}>sender</MenuItem>
        </Select>
      </Toolbar>
    </div>
  );
};

export default OperationBar;
