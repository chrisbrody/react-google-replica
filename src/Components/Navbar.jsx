import CustomLink from "./Shared/CustomLink";
import CustomImage from "./Shared/CustomImage";

import Profile from "../Assets/images/chris.jpg";

import "./Navbar.scss";

function Navbar() {
  return (
    <div id="top">
      <ul className="right">
        <li>
          <CustomLink
            href="https://www.google.com/"
            className="CustomLink"
            target="_blank"
            txt="+Chris"
          />
        </li>
        <li>
          <CustomLink
            href="https://mail.google.com/mail/?tab=wm"
            className="CustomLink"
            target="_blank"
            txt="Mail"
          />
        </li>
        <li>
          <CustomLink
            href="https://www.google.com/imghp?hl=en&tab=wi&ei=jtezVc6XNcq2ed_doeAL&ved=0CBQQqi4oAQ"
            className="CustomLink"
            target="_blank"
            txt="Images"
          />
        </li>
        <li>
          <div className="fa fa-th"></div>
        </li>
        <li>
          <div className="fa fa-bell-o"></div>
        </li>
        <li>
          <span className="share">Share</span>
        </li>
        <li>
          <CustomImage
            className="profile"
            src={Profile}
            alt="Chris's Profile Image"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
