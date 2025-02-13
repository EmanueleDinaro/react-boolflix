import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="nav-bar">
        <a href="#">
          <img
            className="logo"
            src="../../img/fontbolt.png"
            alt="logo boolflix"
          />
        </a>

        <ul>
          <li>
            <SearchBar></SearchBar>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shows</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
        </ul>
        <a href="#">
          <img
            className="profile"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
        </a>
      </div>
    </header>
  );
}
