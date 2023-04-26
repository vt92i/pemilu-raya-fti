const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">Logo PEMILRA</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Peraturan</a>
            </li>
            <li>
              <a>Kandidat</a>
            </li>
            <li>
              <a>Timeline</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
