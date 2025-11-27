import { Braces, Copy, ExternalLink, GitGraph } from "lucide-react";
//import { useTranslation } from "react-i18next";
import sampleresponses from "../../data/responseexamplegraphql.json";
import { queryGetCharacter, queryListMachines, querySearchAreas } from "../../data/graphql/queries";

export default function TabGraphQL() {

  const endpoint = "https://horizonapi.luisrocharo.com/api/graphql";
  const urlGui = "https://horizonapi.luisrocharo.com/graphiql";
  const copyToClipboard = (text) => navigator.clipboard.writeText(text);
  const openInNewTab = (url) => window.open(url, "_blank");
  const formatJSON = (obj) => JSON.stringify(obj, null, 2);

  return (
    <div className="text-white space-y-10">
        {/* SECCIÓN 1 - ENCABEZADO */}
        <section>
            <div className="flex items-center gap-2 mb-3">
                <GitGraph className="text-[#f6009b] drop-shadow-md" />
                <h3 className="text-xl font-semibold drop-shadow-sm">
                    Documentación GraphQL API
                </h3>
            </div>

            <p className="text-gray-200/90 mb-6 text-sm sm:text-base leading-relaxed">
                La API de Horizon ahora incluye soporte basico para GraphQL, permitiendo realizar consultas flexibles sobre los datos de esta API.
                Con GraphQL se podran solicitar solo los campos exactos que se necesitan y reducir el número de peticiones.
            </p>
        </section>

        <section>
            <h4 className="font-semibold text-gray-100 mb-2">Endpoint GraphQL</h4>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
                Todas las consultas GraphQL se envian a este endpoint:
            </p>

            {/* Badge + Endpoint + Botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
            bg-[#e535ab]/20 text-[#ff7acb] border border-[#e535ab]/30
            backdrop-blur-md shadow-inner"
          >
            GRAPHQL
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
            </div>
          </div>
        </div>
        </section>

        <section>
            <h4 className="font-semibold text-gray-100 mb-2">GraphiQL</h4>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
                Puedes utilizar GraphiQL para explorar la API desde el navegador:
            </p>

            {/* Badge + Endpoint + Botones */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-3 py-1 text-xs font-bold rounded-lg
            bg-[#e535ab]/20 text-[#ff7acb] border border-[#e535ab]/30
            backdrop-blur-md shadow-inner"
          >
            GRAPHQL
          </span>

          <div className="flex-1 bg-black/10 backdrop-blur-md text-gray-100 p-3 rounded-lg flex justify-between items-center text-xs sm:text-sm font-mono border border-white/20 shadow-inner overflow-x-auto scrollbar-hide">
            <span className="break-all whitespace-pre-wrap max-w-full pr-3">
              {urlGui}
            </span>
            <div className="flex items-center gap-2">
              <Copy
                className="cursor-pointer hover:text-[#1244c3] transition"
                size={18}
                onClick={() => copyToClipboard(urlGui)}
              />
              <ExternalLink
                className="cursor-pointer hover:text-orange-400 transition"
                size={18}
                onClick={() => openInNewTab(urlGui)}
              />
            </div>
          </div>
        </div>
        </section>

        <section> 
            <h4 className="font-semibold text-gray-100 mt-8 mb-2">
              Ejemplo 1: Obtener un personaje por id
            </h4>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Esta consulta obtiene los detalles unicamente necesarios de un personaje específico utilizando su id como parámetro.
            </p>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Query:
            </p>

            {/* Ejemplo JSON */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard((queryGetCharacter))}
                />
              </div>
              <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
                {(queryGetCharacter)}
              </pre>
            </div>

            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Respuesta:
            </p>

            {/* Ejemplo JSON */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard(formatJSON(sampleresponses.responses[0].data))}
                />
              </div>
              <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
                {formatJSON(sampleresponses.responses[0].data)}
              </pre>
            </div>

        </section>

        <section> 
            <h4 className="font-semibold text-gray-100 mt-8 mb-2">
              Ejemplo 2: Obtener el listado de maquinas
            </h4>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Esta consulta obtiene el listado de maquinas disponibles, devolviendo la información necesaria declarada en el query.
            </p>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Query:
            </p>

            {/* Ejemplo JSON */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard((queryListMachines))}
                />
              </div>
              <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
                {(queryListMachines)}
              </pre>
            </div>

            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Respuesta:
            </p>

            {/* Ejemplo JSON */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard(formatJSON(sampleresponses.responses[1].data))}
                />
              </div>
              <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
                {formatJSON(sampleresponses.responses[1].data)}
              </pre>
            </div>

        </section>

        <section> 
            <h4 className="font-semibold text-gray-100 mt-8 mb-2">
              Ejemplo 3: Listado de areas por busqueda parcial
            </h4>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Esta consulta obtiene el listado de areas que coinciden con el término de búsqueda parcial "la".
            </p>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Query:
            </p>

            {/* Ejemplo JSON */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard((querySearchAreas))}
                />
              </div>
              <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
                {(querySearchAreas)}
              </pre>
            </div>

            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              Respuesta:
            </p>

            {/* Ejemplo JSON */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-sm font-mono text-gray-100 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.35)] relative mt-4">
              <div className="absolute top-2 right-2 flex items-center gap-2 text-xs text-gray-300 bg-black/10 rounded-lg px-2 py-1 border border-white/10 backdrop-blur-md">
                <Copy
                  className="cursor-pointer hover:text-[#1244c3] transition"
                  size={14}
                  onClick={() => copyToClipboard(formatJSON(sampleresponses.responses[2].data))}
                />
              </div>
              <pre className="text-left whitespace-pre overflow-x-auto pl-2 font-mono text-gray-100">
                {formatJSON(sampleresponses.responses[2].data)}
              </pre>
            </div>

        </section>

        {/* SECCIÓN 5 - ADVERTENCIA */}
        <section>
          <div className="bg-[#e535ab]/20 text-[#ff7acb] border border-[#e535ab]/30 backdrop-blur-md rounded-xl p-4 text-sm shadow-inner">
            ⚠️ Advertencia:
            Esta opción ofrece soporte completo para todas las operaciones de lectura disponibles en la API REST.
            Sin embargo, aún no incluye funcionalidades como mutaciones, consultas anidadas o relaciones complejas.
            Estas capacidades podrían añadirse en versiones futuras.
          </div>
        </section>

    </div>
  );
}