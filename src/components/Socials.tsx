import {
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {/* Facebook */}
      <li className="animate-bounce hover:animate-none">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </li>

      {/* TikTok */}
      <li className="animate-bounce hover:animate-none">
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTiktok} size="lg" color="#FE2C55" />
        </a>
      </li>

      {/* WhatsApp */}
      <li className="animate-bounce hover:animate-none">
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
