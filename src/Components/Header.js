import '../Styles/Header.css'

function Header() {
  return (
    <div className="header">
      <i className="header-icon fa-solid fa-bars"></i>
      <text className="logo">EchoNotes</text>
      <i className="header-icon fa-solid fa-circle-user"></i>
    </div>
  );
}

export default Header;