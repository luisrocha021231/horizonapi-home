import { Brain, Copy, ExternalLink } from "lucide-react";
import translatedExamples from "../../data/sampleTranslation.json";

export default function TabTranslation() {
  const baseEndpoint = "https://horizonapi.luisrocharo.com/api";

  const examples = translatedExamples.examples; // Importar ejemplos desde el JSON

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);
  const openInNewTab = (url) => window.open(url, "_blank");
  const formatJSON = (obj) => JSON.stringify(obj, null, 2);

  return (
    <div className="text-white space-y-10">
      {/* SECCIÓN 1 - ENCABEZADO */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Brain className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">
            Traducción con IA
          </h3>
        </div>

        <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
          Los datos fueron recuperados y almacenados a partir de la información del sitio Horizon Wiki en su idioma original, por lo tanto todas las respuestas se generan en inglés. 
          El módulo de <strong className="text-white">traducción automática</strong> se implemento para facilitar respuestas en otros idiomas de forma nativa, sin embargo 
          está actualmente en <span className="text-orange-400 font-semibold">fase de desarrollo y pruebas</span>.  
          Esta opción permite traducir cualquier endpoint de la API de Horizon utilizando
          <strong className="text-white"> GPT-5</strong>.
        </p>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-gray-300 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          ⚙️ <strong>Modo experimental:</strong> las respuestas traducidas se generan dinámicamente.
          Si la respuesta tarda más de <strong>30 segundos</strong>, la petición se cancela
          automáticamente para evitar bloqueos del servidor.
        </div>
      </section>

      {/* SECCIÓN 2 - DESCRIPCIÓN GENERAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          Parámetro <code>lang</code>
        </h4>

        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Para obtener resultados traducidos, añade el parámetro <code>?lang=</code> 
          al final de cualquier endpoint, indicando el idioma deseado (por ejemplo: 
          <code>es</code>, <code>ru</code>, <code>jp</code>, <code>fr</code>, etc.).
        </p>

        <p className="text-gray-300 text-sm sm:text-base mb-4">
          Ejemplo general: <code>/api/areas?lang=es</code> devolverá la información traducida
          al español. Este parámetro se aplica a <strong>todos los endpoints</strong> disponibles.
        </p>
      </section>

      {/* SECCIÓN 3 - EJEMPLOS DE USO */}
      <section>
        <h4 className="font-semibold text-gray-100 mb-2">Ejemplos de endpoints traducidos:</h4>

        {/* Ejemplo 1 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseEndpoint}/regions/4?lang=es
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseEndpoint}/regions/4?lang=es`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseEndpoint}/regions/4?lang=es`)}
              />
            </div>
          </div>
        </div>

        {/* Ejemplo 2 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseEndpoint}/machines?lang=jp
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseEndpoint}/machines?lang=jp`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseEndpoint}/machines?lang=jp`)}
              />
            </div>
          </div>
        </div>

        {/* Ejemplo 3 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseEndpoint}/areas?search=sundom&lang=fr
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseEndpoint}/areas?search=sundom&lang=fr`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseEndpoint}/areas?search=sundom&lang=fr`)}
              />
            </div>
          </div>
        </div>

        {/* Ejemplo 4 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {baseEndpoint}/characters/4?lang=ru
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${baseEndpoint}/characters/4?lang=ru`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${baseEndpoint}/characters/4?lang=ru`)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - EJEMPLO DE RESPUESTA */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          Ejemplos de respuestas traducidas:
        </h4>

        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          A continuación se muestran ejemplos de respuestas traducidas generadas por el modelo <strong>GPT-5</strong>.
        </p>

        {/* 🔹 NUEVA SECCIÓN: RENDERIZAR EJEMPLOS DEL JSON */}
        <div className="mt-8 space-y-6">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-black/40 backdrop-blur-xl border border-white/20 
                         rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed 
                         shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 
                              bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard(formatJSON(item))}
                />
              </div>
              <pre className="whitespace-pre-wrap break-all overflow-x-auto text-left">
                {formatJSON(item)}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 5 - ADVERTENCIA */}
      <section>
        <div className="bg-red-500/10 border border-red-400/30 backdrop-blur-md rounded-xl p-4 text-sm text-red-300 shadow-inner">
          ⚠️ Esta opción de traducción aún se encuentra en desarrollo.  
          Los resultados pueden variar dependiendo de la complejidad de la solicitud y del idioma solicitado.
        </div>
      </section>
    </div>
  );
}
