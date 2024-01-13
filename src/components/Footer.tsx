import React from "react";

function Footer() {
  return (
    <footer className="w-full h-[40px]  flex justify-center items-center p-2 z-[2]">
      <div className="text-[#B0ADAD] text-[14px] font-normal text-center z-[2] flex gap-3">
        <p>{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>
        <a
          className="hover:cursor-pointer hover:opacity-85 non-italic"
          href="https://github.com/AbdellahBellakrim"
          target="_blank"
        >
          Github
        </a>
        <a
          className="hover:cursor-pointer hover:opacity-85 non-italic"
          href="https://www.linkedin.com/in/abdellahbellakrim/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="hover:cursor-pointer hover:opacity-85 non-italic"
          href="mailto:abdellah.bellakrim.tech@gmail.com"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
