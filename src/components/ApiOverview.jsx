import { Users, Bot, Map, Factory, Brain, GitGraph } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ApiOverview() {

  const { t } = useTranslation();

  const endpoints = [
    {
      icon: <Users size={32} />,
      title: t("overview.endpoints.0.title-endpoint"),
      subtitle: t("overview.endpoints.0.subtitle-endpoint"),
      description: t("overview.endpoints.0.description-endpoint"),
    },
    {
      icon: <Bot size={32} />,
      title: t("overview.endpoints.1.title-endpoint"),
      subtitle: t("overview.endpoints.1.subtitle-endpoint"),
      description: t("overview.endpoints.1.description-endpoint"),
    },
    {
      icon: <Map size={32} />,
      title: t("overview.endpoints.2.title-endpoint"),
      subtitle: t("overview.endpoints.2.subtitle-endpoint"),
      description: t("overview.endpoints.2.description-endpoint"),
    },
    {
      icon: <Factory size={32} />,
      title: t("overview.endpoints.3.title-endpoint"),
      subtitle: t("overview.endpoints.3.subtitle-endpoint"),
      description: t("overview.endpoints.3.description-endpoint"),
    },
    {
      icon: <Brain size={32} color="#69b16c" />,
      title: t("overview.endpoints.4.title-endpoint"),
      subtitle: t("overview.endpoints.4.subtitle-endpoint"),
      description: t("overview.endpoints.4.description-endpoint"),
    },
    {
      icon: <GitGraph size={32} color="#f6009b" />,
      title: t("overview.endpoints.5.title-endpoint"),
      subtitle: t("overview.endpoints.5.subtitle-endpoint"),
      description: t("overview.endpoints.5.description-endpoint"),
      isNew: true
    },
  ];

  return (
    <section
      id="overview"
      className="
        relative py-24
        text-white
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {t("overview.title")}
        </h2>

        <p className="text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t("overview.description")}
        </p>

        {/* Tarjetas estilo liquid glass */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {endpoints.map((ep) => (
            <div
              key={ep.title}
              className="
                bg-black/15
                backdrop-blur-xl
                border border-white/20
                rounded-2xl
                shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                p-6
                hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)]
                hover:bg-black/25
                hover:scale-[1.02]
                transition-all
                duration-300
                text-left
                cursor-default
              "
            >
              {ep.isNew && (
                <span
                  className="
                    absolute top-3 right-3
                    px-3 py-1
                    text-xs font-semibold
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    border border-white/30
                    shadow-[0_0_10px_rgba(255,255,255,0.3)]
                    text-white
                  "
                >
                  {t("overview.endpoints.5.tag")}
                </span>
              )}
              <div className="text-[#1244c3] mb-3 drop-shadow-sm">
                {ep.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {ep.title}
              </h3>
              <p className="text-sm text-gray-200 mb-3">{ep.subtitle}</p>
              <p className="text-gray-100 text-sm leading-relaxed">
                {ep.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
