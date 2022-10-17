import Image from "./Shared/CustomImage";
import Input from "./Shared/CustomInput";
import Button from "./Shared/CustomButton";

import GoogleImage from "../Assets/images/google.png";

import "./Main.scss";

function Main() {
  return (
    <>
      <div id="middle">
        <Image src={GoogleImage} alt="Google Image" />
        <br />
        <Input af="autofocus" ph="Search Google or type a URL" type="text" />
        <div class="buttons">
          <Button type="button" txt="Google Search" className="btn-search" />
          <Button type="button" txt="I'm Feeling Lucky" className="btn-lucky" />
        </div>
      </div>
    </>
  );
}

export default Main;
