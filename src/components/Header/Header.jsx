import React from "react";
import HeaderBtn from "./HeaderBtn/HeaderBtn";

const Header = (props) => {
  return (
    <>
      <HeaderBtn />
      {/* <HeaderBtn className="item2" title="Программа курса" />
      <HeaderBtn className="item3" title="FAQ" />
      <HeaderBtn className="item4" title="Контакты" /> */}
    </>
  );
};

export default React.memo(Header);
