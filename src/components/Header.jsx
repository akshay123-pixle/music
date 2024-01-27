function Header() {
  return (
    <div className="header">
      <nav
        class="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <ul>
          <span>
            <img src="https://themewagon.github.io/solmusic/img/logo.png" />
          </span>
          <li>Home</li>
          <li>About</li>
          <li>Pages</li>
          <li>News</li>
          <li>Contact</li>
          <li className="change1">Help</li>
          <li>|</li>
          <li>Login</li>
          <li className="change2">Create an account</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
