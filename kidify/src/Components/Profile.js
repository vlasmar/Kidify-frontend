import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function Profile() {
  const [userInfo, setUserInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
        .get(`http://localhost:4000/users/${id}`)
        .then((response) => {
            console.log(response.data);
            setUserInfo(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, [id]);

  return (
    <div className="profile">
      <div className="header">
        <Header />
      </div>
      <div className="profile-mainpage">
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" margin='10px'>
        <CDBSidebarHeader>
        <h4>Hello, {userInfo.first_name} </h4>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/create_playlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem textFontSize='18px'>Create new playlist +</CDBSidebarMenuItem>
            </NavLink>
            <p className="playlists-title">My Playlists</p>
            <NavLink exact to="/:id_playlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem textFontSize='18px' className="ps-5">Playlist 1</CDBSidebarMenuItem>
              </NavLink>
            <NavLink exact to="/:id_playlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem textFontSize='18px' className="ps-5">Playlist 2</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/:id_playlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem textFontSize='18px' className="ps-5">Playlist 3</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/favorites" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem textFontSize='18px'>Favorites</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/logout" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem textFontSize='18px'>Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    <div className="profile-right-column">
        Hello
        <p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </div>
    </div>
      <Footer />
    </div>
  );
}

export default Profile;
