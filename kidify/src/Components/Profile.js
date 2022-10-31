import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import FavoritesList from "./FavoritesList";

function Profile() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/profile`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="profile">
      <div className="profile-mainpage">
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <CDBSidebar textColor="#fff" backgroundColor="#333" margin="10px">
            <CDBSidebarHeader>
              <h4>Hello, {userInfo.first_name} </h4>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink
                  exact
                  to="/create_playlist"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px">
                    Create new playlist +
                  </CDBSidebarMenuItem>
                </NavLink>
                <p className="playlists-title">My Playlists</p>
                <NavLink
                  exact
                  to="/:id_playlist"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px" className="ps-5">
                    Playlist 1
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/:id_playlist"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px" className="ps-5">
                    Playlist 2
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/:id_playlist"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px" className="ps-5">
                    Playlist 3
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/users/profile/favorites"
                  target="_blank"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px">
                    Favorites
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/logout"
                  target="_blank"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px">
                    Logout
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className="profile-right-column">
          My Favorites
          <FavoritesList />
        </div>
      </div>
    </div>
  );
}

export default Profile;
