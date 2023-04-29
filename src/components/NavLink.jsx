import React from "react";

function NavLink({ className, text, currentPage, handlePageChange }) {
  const hash = `#${text}`;
  return (
    <a
      className={hash === currentPage ? className : "waves-effect"}
      href={hash}
      onClick={() => handlePageChange(hash)}
    >
      {text}
    </a>
  );
}

export default NavLink;
