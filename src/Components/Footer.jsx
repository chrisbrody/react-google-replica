import CustomLink from "./Shared/CustomLink";

import "./Footer.scss";

function Footer() {
  return (
    <div id="bottom">
      <ul class="left">
        <li>
          <CustomLink
            href="https://www.google.com/intl/en/ads/?fg=1"
            txt="Advertising"
          />
        </li>
        <li>
          <CustomLink
            href="https://www.google.com/services/?fg=1"
            txt="Business"
          />
        </li>
        <li>
          <CustomLink
            href="https://www.google.com/intl/en/about.html?fg=1"
            txt="About"
          />
        </li>
      </ul>
      <ul class="right">
        <li>
          <CustomLink
            href="https://www.google.com/intl/en/policies/privacy/?fg=1"
            txt="Privacy"
          />
        </li>
        <li>
          <CustomLink
            href="https://www.google.com/intl/en/policies/terms/?fg=1"
            txt="Terms"
          />
        </li>
        <li>
          <CustomLink
            href="https://www.google.com/preferences?hl=en"
            txt="Settings"
          />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
