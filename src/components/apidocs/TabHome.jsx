import { BookOpen, Copy, ExternalLink, Code2 } from "lucide-react";

// Importación de los samples JSON
import allEndpoints from "../../data/allEndpoints.json";
import sampleCharacter from "../../data/sampleCharacter.json";
import sampleMachine from "../../data/sampleMachine.json";
import sampleCauldron from "../../data/sampleCauldron.json";
import { useTranslation } from "react-i18next";

export default function TabHome() {
  const { t } = useTranslation();
  const baseURL = "https://horizonapi.luisrocharo.com/api";

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);
  const formatJSON = (obj) => JSON.stringify(obj, null, 2);
  const openInNewTab = (url) => window.open(url, "_blank");

  return (
    <div className="text-white space-y-10">
      {/* GUÍA RÁPIDA */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">
            {t("tabHome.quickstart")}
          </h3>
        </div>

        <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
          {t("tabHome.quickstart-description")}
        </p>

        {/* URL Base */}
        <h4 className="font-semibold text-gray-100 mb-2">
          {t("tabHome.base-url-title")}
        </h4>

        <div className="flex items-center gap-2">
          {/* 🟩 Badge GET */}
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
              bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
              backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner hover:bg-black/15 transition overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseURL}
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(baseURL)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(baseURL)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ENDPOINTS DISPONIBLES */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">
            {t("tabHome.endpoints-title")}
          </h3>
        </div>

        <p className="text-gray-200/90 mb-4 text-sm sm:text-base leading-relaxed">
          {t("tabHome.endpoint-1-description")}
        </p>

        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative">
          <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
            <Copy
              className="cursor-pointer hover:text-[#1244c3] transition"
              size={14}
              onClick={() => copyToClipboard(formatJSON(allEndpoints))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(allEndpoints)}
          </pre>
        </div>
      </section>

      {/* EJEMPLO 1 - PERSONAJE */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-6 mb-2">
          {t("tabHome.example-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabHome.example-1-description")}
        </p>

        {/* Endpoint + botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
              bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
              backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner hover:bg-black/15 transition overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseURL}/characters/4
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseURL}/characters/4`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseURL}/characters/4`)}
              />
            </div>
          </div>
        </div>

        {/* JSON ejemplo */}
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

      {/* EJEMPLO 2 - MÁQUINA */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-6 mb-2">
          {t("tabHome.example-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabHome.example-2-description")}
        </p>

        {/* Endpoint + botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
              bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
              backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner hover:bg-black/15 transition overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseURL}/machines/4
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseURL}/machines/4`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseURL}/machines/4`)}
              />
            </div>
          </div>
        </div>

        {/* JSON ejemplo */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
          <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
            <Copy
              className="cursor-pointer hover:text-[#1244c3] transition"
              size={14}
              onClick={() => copyToClipboard(formatJSON(sampleMachine))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleMachine)}
          </pre>
        </div>
      </section>

      {/* EJEMPLO 3 - CALDERO */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-6 mb-2">
          {t("tabHome.example-title")}
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          {t("tabHome.example-3-description")}
        </p>

        {/* Endpoint + botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
              bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
              backdrop-blur-md shadow-inner"
          >
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner hover:bg-black/15 transition overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseURL}/cauldrons/4
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseURL}/cauldrons/4`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseURL}/cauldrons/4`)}
              />
            </div>
          </div>
        </div>

        {/* JSON ejemplo */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
          <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
            <Copy
              className="cursor-pointer hover:text-[#1244c3] transition"
              size={14}
              onClick={() => copyToClipboard(formatJSON(sampleCauldron))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleCauldron)}
          </pre>
        </div>
      </section>
    </div>
  );
}
