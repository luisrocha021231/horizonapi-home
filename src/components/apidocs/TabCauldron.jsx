import { useState, useEffect } from "react";
import { Factory, Copy, ExternalLink } from "lucide-react";
import cauldronsData from "../../data/cauldrons.json";
import sampleCauldron from "../../data/sampleCauldron.json";
import sampleSearchCauldron from "../../data/sampleSearchCauldron.json";

export default function TabCauldrons() {
  const endpoint = "https://horizonapi.luisrocharo.com/api/cauldrons";
  const [cauldrons, setCauldrons] = useState([]);

  useEffect(() => {
    setCauldrons(cauldronsData.cauldrons);
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
          <Factory className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">Calderos</h3>
        </div>

        <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
          Descubre los <strong className="text-white">calderos</strong> del mundo de Horizon: 
          instalaciones subterráneas antiguas donde se fabricaban las máquinas.  
          Cada caldero presenta diferentes niveles de dificultad y tipos de máquinas 
          que pueden ser dominadas.
        </p>
      </section>

      {/* SECCIÓN 2 - ENDPOINT PRINCIPAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mb-2">Endpoint principal:</h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Devuelve la lista completa de calderos registrados en la API.  
          Este endpoint no posee paginación.
        </p>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
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
          Consulta individual:
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Permite obtener la información detallada de un caldero específico mediante su <strong>ID</strong>.
        </p>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
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
              onClick={() => copyToClipboard(formatJSON(sampleCauldron))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleCauldron)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 4 - CONSULTA POR SEARCH */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          Consulta mediante búsqueda:
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Permite realizar búsquedas de calderos utilizando el parámetro{" "}
          <code>search</code>, que filtra por coincidencias parciales en el
          nombre (sin distinción de mayúsculas/minúsculas).
        </p>

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-bold rounded-lg
            bg-emerald-400/20 text-emerald-300 border border-emerald-300/30
            backdrop-blur-md shadow-inner">
            GET
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-lg text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {endpoint}?search=t
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(`${endpoint}?search=t`)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(`${endpoint}?search=t`)}
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
              onClick={() => copyToClipboard(formatJSON(sampleSearchCauldron))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleSearchCauldron)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 5 - CALDEROS DESTACADOS */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Factory className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">Calderos más destacados</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cauldrons.map((cauldron) => (
            <div
              key={cauldron.id}
              className="
                bg-white/10 backdrop-blur-lg
                border border-white/25
                rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)]
                overflow-hidden hover:scale-[1.02]
                transition-all duration-300
              "
            >
              {/* Imagen del caldero */}
              <div className="relative w-full h-56 bg-black/10">
                <img
                  src={cauldron.path_image}
                  alt={cauldron.name}
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
                  {cauldron.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  <span className="text-orange-300">
                    {cauldron.region || "Desconocido"}
                  </span>{" "}
                </p>
                <p className="text-xs text-gray-400 italic mb-1">
                  Máquinas dominables:{" "}
                  {cauldron.overridden_machines?.join(", ") || "Sin información"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
