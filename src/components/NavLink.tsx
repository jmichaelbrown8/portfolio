import React from "react";

interface NavLinkProps {
  className: string;
  text: string;
  currentPage: string;
  handlePageChange: any;
}

export const NavLink = ({
  className,
  text,
  currentPage,
  handlePageChange,
}: NavLinkProps) => {
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
};
