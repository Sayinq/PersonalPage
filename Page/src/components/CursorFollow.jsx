import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CursorFollow = () => {
  return (
    <div id="cursor" className="bg-[#FFFFFF]">
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
        id="cursor-comp"
      />
    </div>
  );
};

export default CursorFollow;



