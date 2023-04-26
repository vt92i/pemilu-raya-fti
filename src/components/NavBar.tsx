const NavBar = () => {
  return (
    <>
      <div className="navbar relative z-20 hidden h-fit w-full justify-between bg-none px-12 py-4 lg:flex">
        <img className="w-16" src="/images/pemilra.png"></img>
        <ul className="menu menu-horizontal">
          <li>
            <label htmlFor="modal-peraturan">Peraturan</label>
          </li>
          <li>
            <a>Kandidat</a>
          </li>
          <li>
            <a>Timeline</a>
          </li>
        </ul>
      </div>

      <div className="navbar fixed z-20 bg-transparent lg:hidden">
        <div className="flex-1">
          <div className="flex">
            <a className="btn-ghost btn w-24">
              <img className="w-full" src="/images/pemilra.png"></img>
            </a>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn-ghost btn-square btn">
            <label htmlFor="modal-navigasi" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </label>
          </button>
        </div>
      </div>
      <input type="checkbox" id="modal-peraturan" className="modal-toggle" />
      <label htmlFor="modal-peraturan" className="modal z-30 cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">
            Dua tiga empat lima enam tujuh delapan sembilan sepuluh sebelas dua belas tiga belas
            empat belas lima belas
          </p>
        </label>
      </label>

      <input type="checkbox" id="modal-navigasi" className="modal-toggle" />
      <label htmlFor="modal-navigasi" className="modal z-20 cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="flex-none">
            <ul className="menu menu-vertical">
              <li>
                <label htmlFor="modal-peraturan">Peraturan</label>
              </li>
              <li>
                <a>Kandidat</a>
              </li>
              <li>
                <a>Timeline</a>
              </li>
            </ul>
          </div>
        </label>
      </label>
    </>
  );
};

export default NavBar;
