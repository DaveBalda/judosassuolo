import { BsInstagram } from "react-icons/bs";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative">
      <div className="footer-main">
        <div className="footer-socials-lg">
          <a href="https://www.instagram.com/judosassuolo/" target="_blank">
            <BsInstagram size={30} />
          </a>
          <a href="https://x.com/JudoSassuolo" target="_blank">
            <FaXTwitter size={30} />
          </a>
          <a href="https://www.facebook.com/judo.sassuolo/" target="_blank">
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://www.youtube.com/@judoclubsassuolo5850"
            target="_blank"
          >
            <FaYoutube size={30} />
          </a>
        </div>
        <div className="footer-socials-sm">
          <div className="child">
            <a href="https://www.instagram.com/judosassuolo/" target="_blank">
              <BsInstagram size={30} />
            </a>
            <a href="https://x.com/JudoSassuolo" target="_blank">
              <FaXTwitter size={30} />
            </a>
          </div>
          <div className="child">
            <a href="https://www.facebook.com/judo.sassuolo/" target="_blank">
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.youtube.com/@judoclubsassuolo5850"
              target="_blank"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
        <div className="footer-text absolute bottom-6">
          <p className="text-white font-gidole">Realizzato da</p>
          <p className="text-white font-goth">Davide Baldacini</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
