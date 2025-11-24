import { useState, useEffect } from "react";
import { MapPin, Copy, ExternalLink } from "lucide-react";
import areasData from "../../data/areas.json";
import sampleArea from "../../data/sampleArea.json";
import sampleSearchArea from "../../data/sampleSearchArea.json";
import { useTranslation } from "react-i18next";

export default function TabAreas() {
  const { t } = useTranslation();
  const endpoint = "https://horizonapi.luisrocharo.com/api/areas";
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setAreas(areasData.areas);
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
          <MapPin className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">{t("tabAreas.title")}</h3>
        </div>

        <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
          {t("tabAreas.description")}
        </p>
      </section>

      {/* SECCIÓN 2 - ENDPOINT PRINCIPAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mb-2">{t("tabAreas.main-endpoint")}</h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabAreas.main-endpoint-description")}
        </p>

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
      </section>

      {/* SECCIÓN 3 - CONSULTA POR ID */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          {t("tabAreas.individual-request-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabAreas.individual-request-description")}
        </p>

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
              onClick={() => copyToClipboard(formatJSON(sampleArea))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleArea)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 4 - CONSULTA POR SEARCH */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          {t("tabAreas.search-request-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabAreas.search-request-description")}
        </p>

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
              {endpoint}?search=a
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${endpoint}?search=a`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${endpoint}?search=a`)}
              />
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
          <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
            <Copy
              className="cursor-pointer hover:text-[#1244c3] transition"
              size={14}
              onClick={() => copyToClipboard(formatJSON(sampleSearchArea))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleSearchArea)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 5 - ÁREAS DESTACADAS */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">{t("tabAreas.response-example-title")}</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.id}
              className="
                bg-white/10 backdrop-blur-lg
                border border-white/25
                rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)]
                overflow-hidden hover:scale-[1.02]
                transition-all duration-300
              "
            >
              {/* Imagen del área */}
              <div className="relative w-full h-56 bg-black/10">
                <img
                  src={area.image_path}
                  alt={area.name}
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

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {area.type || "Sin tipo definido"} •{" "}
                  <span className="text-orange-300">
                    {area.faction || "Sin facción"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
