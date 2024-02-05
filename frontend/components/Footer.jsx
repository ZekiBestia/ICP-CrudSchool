import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="/frontend/assets/instagram.svg" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="/frontend/assets/discord.svg" alt="Discord" className="h-6 w-6" />
        </a>
        <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="/frontend/assets/github.svg" alt="Github" className="h-6 w-6" />
        </a>
        {/* Agrega otros enlaces a redes sociales según sea necesario */}
      </div>
    </footer>
  );
}

export default Footer;
