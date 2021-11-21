import React from "react";
import Typical from "react-typical";

const TypeCommand = (props) => {
    
  return (
    <>
      <Typical
        steps={[
          `${() => "callback"}`,
          1000,
          `> Наберите ${4} чтобы увидеть доступные команды`,
          1000,
        ]}
        loop={6}
        wrapper="p"
      />
    </>
  );
};

setTimeout(TypeCommand(), 3000);

export default React.memo(TypeCommand);
