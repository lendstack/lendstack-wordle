import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IoGlobeOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white p-4 text-center">
      <div className="flex justify-center items-center space-x-4">
        <a href="https://www.linkedin.com/in/azedineouhadou/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Xperaz" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.azedineouhadou.tech/" target="_blank" rel="noopener noreferrer">
          <IoGlobeOutline size={30} />
        </a>
        <a href="https://twitter.com/OuhadouAzedine" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </div>
      <p className="mt-2">© 2024 Azedine Ouhadou. All rights reserved.</p>
    </footer>
  );
};

export default Footer;