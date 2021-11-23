import React from "react";
import HeaderBtnInTerminal from "./HeaderBtnInTerminal/HeaderBtnInTerminal";

const Header = (props) => {
  return (
    <>
      <HeaderBtnInTerminal />
      {/* <HeaderBtn className="item2" title="Программа курса" />
      <HeaderBtn className="item3" title="FAQ" />
      <HeaderBtn className="item4" title="Контакты" /> */}
    </>
  );
};

export default React.memo(Header);
