function NavLink({ className, text, handlePageChange }) {
  return (
    <a
      className={className}
      href={`#${text}`}
      onClick={() => handlePageChange(text)}
    >
      {text}
    </a>
  );
}

export default NavLink;
