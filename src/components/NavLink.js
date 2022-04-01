function NavLink({ className, text }) {
  return (
    <a className={className} href={`#${text}`}>
      {text}
    </a>
  );
}

export default NavLink;
