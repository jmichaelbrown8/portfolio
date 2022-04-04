function NavLink({ className, text, currentPage, handlePageChange }) {
  return (
    <a
      className={text === currentPage ? className : ""}
      href={`#${text}`}
      onClick={() => handlePageChange(text)}
    >
      {text}
    </a>
  );
}

export default NavLink;
