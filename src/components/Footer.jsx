import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="about"
      className="
        w-full
        flex
        flex-col
        items-center
        justify-center
        text-gray-200
        py-12
        text-center
        bg-black/5
        backdrop-blur-md
      "
    >
      <div className="max-w-4xl px-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">

        {/* Enlaces */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4 text-gray-100/90">
          <a
            href="#docs"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            {t("footer.docs-title")}
          </a>
          <a
            href="https://horizonapi.luisrocharo.com/api"
            target="_blank"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            {t("footer.API-title")}
          </a>
          <a
            href="https://horizonapi.luisrocharo.com/api/characters/1"
            target="_blank"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            {t("footer.example-title")}
          </a>
          {/* <a
            href="https://status.luisrocharo.com"
            target="_blank"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Status
          </a> */}
        </div>

        {/* Créditos */}
        <p className="text-xs text-gray-300">
          {t("footer.about-content-1")}{" "}
          <a
            href="https://luisrocharo.com"
            target="_blank"
            className="text-black hover:underline"
          >
            Luis Rocha
          </a>
          {t("footer.about-content-2")}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {t("footer.about-content-3")}{" "}
          <a
            href="https://horizon.fandom.com/wiki/Horizon_Wiki"
            target="_blank"
            className="text-black hover:underline"
          >
            Horizon Wiki
          </a>
          {t("footer.about-content-4")}{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            className="text-black hover:underline"
          >
            CC BY-SA 4.0
          </a>.
        </p>
      </div>
    </footer>
  );
}
