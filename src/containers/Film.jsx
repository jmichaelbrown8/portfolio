import React from "react";

function Film() {
  return (
    <video width="100%" autoPlay controls>
      <source src="./media/CAT124_JMICHAEL_Final.mp4" type="video/mp4" />
      <source src="./media/CAT124_JMICHAEL_Final.ogv" type="video/ogg" />
      <source src="./media/CAT124_JMICHAEL_Final.webm" type="video/webm" />
      <a href="./media/CAT124_JMICHAEL_Final.mov">Download</a>
    </video>
  );
}

export default Film;
