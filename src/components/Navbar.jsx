import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-white/10
        backdrop-blur-lg
        border-b border-white/20
        shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/horizon-logo.webp" // 👈 cambia por la ruta de tu PNG
            alt="Horizon API Logo"
            className="h-8 md:h-10 w-auto drop-shadow-lg select-none"
          />
        </div>

        {/* 🖥️ Menú Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-200 font-medium">
          <li>
            <a href="#docs" className="hover:text-black transition">
              {t("navbar.documentation")}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                window.open("https://github.com/luisrocha021231/horizonapi", "_blank")
              }
              className="hover:text-black transition"
            >
              {t("navbar.repository")}
            </a>
          </li>

          {/* 🌐 Selector de idioma Desktop (Liquid Glass style) */}
          <li>
            <div
              className="
                flex items-center justify-center gap-2
                bg-white/10 backdrop-blur-md
                border border-white/20 rounded-xl
                px-2 py-1
                shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_0_0_15px_rgba(0,0,0,0.3)]
                transition-all duration-300
              "
            >
              {["es", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`
                    px-3 py-1 text-sm font-semibold rounded-lg transition-all
                    ${
                      i18n.language === lng
                        ? "bg-white/40 text-black shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                        : "text-white/80 hover:text-white hover:bg-white/20"
                    }
                  `}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>

        {/* ☰ Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-[#ad7c26] transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Menú móvil */}
      {open && (
        <div
          className="
            md:hidden 
            bg-white/10 
            backdrop-blur-xl 
            border-t border-white/20 
            text-white 
            shadow-inner
            transition-all duration-300
          "
        >
          <ul className="flex flex-col space-y-5 p-6 text-center">
            <li>
              <a
                href="#docs"
                className="hover:text-orange-400 transition"
                onClick={toggleMenu}
              >
                {t("navbar.documentation")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-400 transition"
                onClick={toggleMenu}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                className="hover:text-orange-400 transition"
                onClick={() =>
                  window.open("https://github.com/luisrocha021231/horizonapi", "_blank")
                }
              >
                {t("navbar.repository")}
              </a>
            </li>

            {/* 🌐 Idiomas en móvil */}
            <li>
              <div
                className="
                  flex justify-center gap-2 mx-auto
                  bg-white/10 backdrop-blur-lg
                  border border-white/20 rounded-2xl
                  px-2 py-1
                  w-fit
                  shadow-[inset_0_0_8px_rgba(255,255,255,0.1),_0_0_10px_rgba(0,0,0,0.3)]
                "
              >
                {["es", "en"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => {
                      changeLanguage(lng);
                      toggleMenu();
                    }}
                    className={`
                      px-3 py-1 text-sm font-semibold rounded-lg transition-all
                      ${
                        i18n.language === lng
                          ? "bg-white/40 text-black shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                          : "text-white/80 hover:text-white hover:bg-white/20"
                      }
                    `}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
