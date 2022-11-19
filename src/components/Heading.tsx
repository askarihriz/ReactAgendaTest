import React from "react";

interface Header {
  text: string;
}

const Heading = (props: Header) => {
  return (
    <div className="font-bold text-[36px] my-8 border-b-[8px] border-black border-double">
      {props.text}
    </div>
  );
};

export default Heading;
