import { useState } from "react";
import TabInicio from "./TabHome";
import TabPersonajes from "./TabCharacters";
import TabMaquinas from "./TabMachine";
import TabRegiones from "./TabRegion";
import TabAreas from "./TabArea";
import TabCalderos from "./TabCauldron";
import TabTraduccion from "./TabTranslate";
import TabGraphql from "./TabGraphql";
import { useTranslation } from "react-i18next";

export default function ApiDocs() {
  const { t } = useTranslation();
  const [active, setActive] = useState("home");

  const tabs = [
    { id: "home", label: t("apidocs.options.0") },
    { id: "characters", label: t("apidocs.options.1") },
    { id: "machines", label: t("apidocs.options.2") },
    { id: "regions", label: t("apidocs.options.3") },
    { id: "areas", label: t("apidocs.options.4") },
    { id: "cauldrons", label: t("apidocs.options.5") },
    { id: "translation", label: t("apidocs.options.6") },
    { id: "graphql", label: t("apidocs.options.7") },
  ];

  const renderContent = () => {
    switch (active) {
      case "home": return <TabInicio />;
      case "characters": return <TabPersonajes />;
      case "machines": return <TabMaquinas />;
      case "regions": return <TabRegiones />;
      case "areas": return <TabAreas />;
      case "cauldrons": return <TabCalderos />;
      case "translation": return <TabTraduccion />;
      case "graphql": return <TabGraphql />;
      default: return null;
    }
  };

  return (
    <section
      id="docs"
      className="
        relative py-16 md:py-20
        text-white overflow-hidden
      "
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Encabezado */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {t("apidocs.title")}
        </h2>

        <p className="text-gray-100 mb-10 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          {t("apidocs.description")}
        </p>

        {/* Tabs */}
        <div
          className="
            flex flex-wrap justify-center gap-3 mb-8
            bg-black/15 backdrop-blur-lg rounded-2xl border border-white/25
            p-3 shadow-[0_8px_24px_rgba(0,0,0,0.25)]
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-3 text-sm md:text-base font-medium rounded-xl transition-all duration-300
                ${
                  active === tab.id
                    ? "bg-black/30 text-white border border-white/40 shadow-inner"
                    : "text-gray-100 hover:text-white hover:bg-black/20"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <div
          className="
            bg-black/15 backdrop-blur-lg border border-white/25
            rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            p-4 sm:p-6 md:p-8
            transition-all duration-300
          "
        >
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
