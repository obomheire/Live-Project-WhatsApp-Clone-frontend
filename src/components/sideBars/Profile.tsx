import React, { createContext } from "react";
import Ellipse from "./profilepic/Ellipse.png";
import profile from "./profilepic/profile.png";
import Select from "react-select";
import { NavDropdown } from "react-bootstrap";
import CurrentUserContext, { UserType } from "../../contextAPI/userContext";
import Dropdown from "../Dropdown/Dropdown";

// const Profile = () => {
  // const actions = [
  //   { label: "New Group", value: 1 },
  //   { label: "Profile", value: 2 },
  //   { label: "Catalog", value: 3 },
  //   { label: "Archdive", value: 4 },
  //   { label: "Starred Messages", value: 5 },
  //   { label: "Labels", value: 6 },
  //   { label: "Settings", value: 7 },
  //   { label: "Log Out", value: 8},
  // ];

const Profile = (props:any) => {
   
  
  const { currentUser, authIsLoading, handleLogout } = React.useContext(CurrentUserContext);
    return (
      <React.Fragment>
        <div className="profileInfo">
          <div className="profileImage">
            <img className="profileImage" src={currentUser.profilePic} alt="profile" />
          </div>
          <span className="eclipse">
            <img className="status" src={Ellipse} alt="elipse" />
          </span>
          <div className="profile__dropdown" > <Dropdown /></div>
        </div>       
        <span className="eclipse">
          <img className="status" src={Ellipse} alt="elipse" />
        </span>
        <span className="select">
          <div className="col-md-4"></div>
        </span>
      {/* </div> */}
      </React.Fragment>
  );
};

export default Profile;

