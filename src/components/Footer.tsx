import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#3c665c] p-10 text-base-content">
        <div>
          <button className="btn-ghost btn-lg btn h-16 w-16 p-2 lg:h-20 lg:w-20">
            <img src="/images/pemilra.png"></img>
          </button>
          <p className="font-bold opacity-100">
            PEMILRA FTI UAJY
            <br />
          </p>
          Pemilu atau Pemilihan raya adalah proses pemilihan pemimpin <br></br>sebuah organisasi
          secara demokratis dengan cara memilih melalui hak suara.
        </div>
        <div>
          <span className="footer-title font-bold opacity-100">Sosial Media</span>

          <div className="grid grid-flow-col gap-4">
            <a
              href="https://instagram.com/pemilrafti_uajy?igshid=YmMyMTA2M2Y="
              target="_blank"
              className="text-lg"
            >
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>

            <a
              href="https://www.youtube.com/@pemilurayaftiuajy3274"
              target="_blank"
              className="text-lg"
            >
              <AiOutlineYoutube></AiOutlineYoutube>
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title font-bold opacity-100">Contact Person</span>
          <a
            className="link-hover link flex flex-col gap-2"
            href="https://instagram.com/pemilrafti_uajy?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <div className="flex justify-center items-center gap-2">
              <AiOutlineInstagram className="text-lg"></AiOutlineInstagram>
              <span>Pemilra FTI UAJY</span>
            </div>
          </a>
        </div>
        <div>
          <span className="footer-title font-bold opacity-100">Lokasi</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15812.392512673185!2d110.4161291!3d-7.7794195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sen!2sid!4v1680610515471!5m2!1sen!2sid"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Footer;
