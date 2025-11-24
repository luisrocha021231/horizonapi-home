import { useState, useEffect } from "react";
import { Users, Copy, ExternalLink } from "lucide-react";
import charactersData from "../../data/characters.json";
import sampleCharacter from "../../data/sampleCharacter.json";
import samplePagination from "../../data/samplePagination.json";
import { useTranslation } from "react-i18next";

export default function TabCharacters() {
  const { t } = useTranslation(); 
  const endpoint = "https://horizonapi.luisrocharo.com/api/characters";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(charactersData.characters);
  }, []);

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);
  const openInNewTab = (url) => window.open(url, "_blank");
  const formatJSON = (obj) => JSON.stringify(obj, null, 2);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <div className="text-white space-y-10">
      {/* SECCIÓN 1 - ENCABEZADO */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Users className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">{t("tabCharacters.title")}</h3>
        </div>

        <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
          {t("tabCharacters.description")}
        </p>
      </section>

      {/* SECCIÓN 2 - ENDPOINT PRINCIPAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mb-2">{t("tabCharacters.main-endpoint")}</h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabCharacters.main-endpoint-description")}
        </p>

        {/* Badge + Endpoint + Botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-md text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {endpoint}
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(endpoint)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(endpoint)}
              />
            </div>
          </div>
        </div>

        {/* Documentación de Query Params */}
        <div className="bg-white/5 border border-white/20 rounded-2xl p-5 mt-4 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <h5 className="font-semibold text-white mb-2 text-lg">
            {t("tabCharacters.available-parameters")}
          </h5>

          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside space-y-1 text-justify pl-5">
            <li>
              <strong>page</strong> — {t("tabCharacters.parameter-page")}
            </li>
            <li>
              <strong>size</strong> — {t("tabCharacters.parameter-size")}
            </li>
            <li>
              <strong>search</strong> — {t("tabCharacters.parameter-search")}
            </li>
          </ul>

          <p className="mt-3 text-black text-sm text-justify">
            {t("tabCharacters.issue-request")}
          </p>

          <p className="mt-3 text-red-200 text-sm italic text-justify">
            {t("tabCharacters.parameter-note")}
          </p>
        </div>

      </section>

      {/* SECCIÓN 3 - CONSULTA INDIVIDUAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          {t("tabCharacters.individual-request-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabCharacters.individual-request-description")}
        </p>

        {/* Badge + Endpoint + Botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {endpoint}/4
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${endpoint}/4`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${endpoint}/4`)}
              />
            </div>
          </div>
        </div>

        {/* Ejemplo JSON */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
          <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
            <Copy
              className="cursor-pointer hover:text-[#1244c3] transition"
              size={14}
              onClick={() => copyToClipboard(formatJSON(sampleCharacter))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleCharacter)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 4 - CONSULTA CON PAGINACIÓN */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          {t("tabCharacters.pagination-request-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabCharacters.pagination-request-description")}
        </p>

        {/* Badge + Endpoint + Botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {endpoint}?search=al&page=1&size=30
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() =>
                  copyToClipboard(`${endpoint}?search=al&page=1&size=30`)
                }
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() =>
                  openInNewTab(`${endpoint}?search=al&page=1&size=30`)
                }
              />
            </div>
          </div>
        </div>

        {/* Ejemplo JSON */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
          <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
            <Copy
              className="cursor-pointer hover:text-[#1244c3] transition"
              size={14}
              onClick={() => copyToClipboard(formatJSON(samplePagination))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(samplePagination)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 5 - PERSONAJES POPULARES */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Users className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">{t("tabCharacters.response-example-title")}</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((char) => (
            <div
              key={char.id}
              className="
                bg-white/10 backdrop-blur-lg
                border border-white/25
                rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)]
                overflow-hidden hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <div className="relative w-full h-56 bg-black/10">
                <img
                  src={char.image_path}
                  alt={char.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div
                  className="
                    absolute inset-0 hidden items-center justify-center
                    bg-white/10 backdrop-blur-md border-t border-white/20
                    text-gray-200 text-sm font-medium
                  "
                >
                  No Image
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {char.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {char.culture || "Sin cultura"} •{" "}
                  <span
                    className={`${
                      char.status === "Alive"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {char.status}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mb-2 italic">
                  {char.profession || "Sin profesión"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
