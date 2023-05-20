const NavBar = () => {
    return (
        <>
            <div className="navbar relative z-20 flex items-center justify-between px-2 lg:px-32 py-4">
                <button className="btn-ghost btn-lg btn h-16 w-16 p-2 lg:h-20 lg:w-20">
                    <img src="/images/pemilra.png"></img>
                </button>
                <ul className="menu menu-horizontal hidden gap-12 lg:flex">
                    <li>
                        <label htmlFor="modal-peraturan">Peraturan</label>
                    </li>
                    <li>
                        <a onClick={() => document.getElementById('kandidat')?.scrollIntoView({ behavior: 'smooth' })}>
                            Kandidat
                        </a>
                    </li>
                    <li>
                        <a onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}>
                            Timeline
                        </a>
                    </li>
                </ul>
                <button className="btn-ghost btn-square btn-lg btn lg:hidden hover:bg-base-100">
                    <label
                        htmlFor="modal-navigasi"
                        className="btn bg-primary border-primary hover:bg-primary hover:border-0"
                    >
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

            <input type="checkbox" id="modal-navigasi" className="modal-toggle" />
            <label htmlFor="modal-navigasi" className="modal z-20 cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div className="flex-none">
                        <ul className="menu menu-vertical">
                            <li>
                                <label htmlFor="modal-peraturan">Peraturan</label>
                            </li>
                            <li>
                                <a
                                    onClick={() =>
                                        document.getElementById('kandidat')?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    Kandidat
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() =>
                                        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    Timeline
                                </a>
                            </li>
                        </ul>
                    </div>
                </label>
            </label>

            <input type="checkbox" id="modal-peraturan" className="modal-toggle" />
            <label htmlFor="modal-peraturan" className="modal z-30 cursor-pointer">
                <label className="modal-box relative max-w-4xl" htmlFor="">
                    <h1 className="text-4xl font-bold">Peraturan</h1>
                    <h2 className="text-lg pt-4 font-bold">Sebelum Acara</h2>
                    <div className="">
                        <ul className="list-inside list-disc">
                            <li>
                                Peserta Pemilra adalah seluruh mahasiswa FTI yang sudah melakukan registrasi dan
                                terdaftar dalam Pemilu Raya FTI 2023/2024
                            </li>
                            <li>Registrasi sebagai peserta Pemilra dapat dilakukan melalui (link) </li>
                            <li>Setelah form menunjukkan (tanda) berarti pendaftaran telah berhasil dilakukan. </li>
                        </ul>
                    </div>
                    <h2 className="text-lg pt-4 font-bold">Setelah Acara</h2>
                    <div>
                        <ul className="list-inside list-disc">
                            <li>
                                Setiap peserta pemilra wajib melakukan registrasi ulang dengan menuliskan Nama, NPM, dan
                                program studi.
                            </li>
                            <li>
                                Peserta pemilra akan mendapatkan dua buah kartu suara, satu kartu suara untuk memilih
                                ketua lembaga prodi masing-masing dan satu kartu suara untuk memilih ketua senat
                                mahasiswa.{' '}
                            </li>
                            <li>
                                Peserta pemilra membawa kartu suara ke bilik suara kemudian mencoblos kartu suara.
                                Setelah itu, peserta pemilra memasukkan kartu suara ke kotak suara yang sudah
                                disediakan.
                            </li>
                            <li>
                                Peserta pemilra mencelupkan jari ke tinta, kemudian boleh meninggalkan area pemungutan
                                suara.
                            </li>
                        </ul>
                    </div>
                </label>
            </label>
        </>
    );
};

export default NavBar;
