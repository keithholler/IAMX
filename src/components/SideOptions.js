import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";

const SideOptions = (props) => {
  return (
    <div class="sidebar">
      <ProSidebar class="proSideBar">
        <Menu iconShape="round">
          <MenuItem><h5>Access Management</h5></MenuItem>
          <SubMenu title="User Management">
            <MenuItem>
              <NavLink exact className="nav-link" to="/finduser"></NavLink>Find
              User
            </MenuItem>

            <MenuItem>
              <NavLink exact className="nav-link" to="/createuser">
              </NavLink>
              Create New User
            </MenuItem>
          </SubMenu>
          <MenuItem> Pending Approvals For Self</MenuItem>
          <SubMenu title="Pending Approvals For Others">
            <MenuItem>rholler</MenuItem>
            <MenuItem>nadghir</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideOptions;
