import { useState, useEffect } from "react";
import { Cog, Copy, ExternalLink } from "lucide-react";
import machinesData from "../../data/machines.json";
import sampleMachine from "../../data/sampleMachine.json";
import samplePagination from "../../data/sampleMachinePagination.json";

export default function TabMachine() {
  const endpoint = "https://horizonapi.luisrocharo.com/api/machines";
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    setMachines(machinesData.machines);
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
          <Cog className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">Máquinas</h3>
        </div>

        <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
          Consulta las máquinas del universo <strong className="text-white">Horizon</strong>: nombre, clase, tamaño, origen, y en qué juegos aparecen.
        </p>
      </section>

      {/* SECCIÓN 2 - ENDPOINT PRINCIPAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mb-2">Endpoint principal:</h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Devuelve la lista completa de máquinas disponibles en la API.  
          Acepta 3 parámetros opcionales: <code>page</code>, <code>size</code> y <code>search</code>.
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
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">{endpoint}</span>
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
            Parámetros disponibles:
          </h5>

          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside space-y-1 text-justify pl-5">
            <li>
              <strong>page</strong> — Número de página. Valor por defecto: <code>0</code>.
            </li>
            <li>
              <strong>size</strong> — Cantidad de registros por página. Valor por defecto: <code>25</code>.  
              Se puede personalizar entre <code>25</code> y <code>50</code>.
            </li>
            <li>
              <strong>search</strong> — Filtra máquinas cuyo nombre contenga el texto especificado, sin distinción de mayúsculas o minúsculas.
            </li>
          </ul>

          <p className="mt-3 text-black text-sm text-justify">
            Los tres parámetros son opcionales y pueden combinarse de forma libre. Solo se necesita <strong>uno</strong> para activar la paginación.  
            Si no se especifica ninguno, se devuelve la lista completa de máquinas.
          </p>

          <p className="mt-3 text-red-200 text-sm italic text-justify">
            Nota: si se utiliza el parámetro <code>search</code> y el número de resultados es <strong>menor a 25</strong>, la respuesta paginada devolverá valores <code>null</code> en los campos <code>previousPage</code> y <code>nextPage</code>, indicando que no hay más páginas disponibles.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 - CONSULTA INDIVIDUAL */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          Consulta individual:
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Permite obtener la información de una máquina específica mediante su <strong>ID</strong>.
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
              onClick={() => copyToClipboard(formatJSON(sampleMachine))}
            />
          </div>
          <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
            {formatJSON(sampleMachine)}
          </pre>
        </div>
      </section>

      {/* SECCIÓN 4 - CONSULTA CON PAGINACIÓN */}
      <section>
        <h4 className="font-semibold text-gray-100 mt-8 mb-2">
          Consulta con paginación:
        </h4>
        <p className="text-gray-300 mb-3 text-sm sm:text-base">
          Ejemplo de uso combinando los parámetros <code>page</code>, <code>size</code> y <code>search</code> para filtrar resultados.
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
              {endpoint}?search=t&page=1&size=27
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() =>
                  copyToClipboard(`${endpoint}?search=t&page=1&size=27`)
                }
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() =>
                  openInNewTab(`${endpoint}?search=t&page=1&size=27`)
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

      {/* SECCIÓN 5 - MÁQUINAS POPULARES */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <Cog className="text-[#1244c3] drop-shadow-md" />
          <h3 className="text-xl font-semibold drop-shadow-sm">Máquinas más populares</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine) => (
            <div
              key={machine.id}
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
                  src={machine.path_image}
                  alt={machine.name}
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
                  {machine.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {machine.machine_class || "Clase desconocida"} •{" "}
                  <span className="text-orange-300">
                    {machine.origin || "Origen desconocido"}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mb-2 italic">
                  {machine.size || "Tamaño desconocido"} •{" "}
                  {machine.strength || "Fuerza desconocida"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
