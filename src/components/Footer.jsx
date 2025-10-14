export default function Footer() {
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
            Documentación
          </a>
          <a
            href="https://horizonapi.luisrocharo.com/api"
            target="_blank"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            API Endpoint
          </a>
          <a
            href="https://horizonapi.luisrocharo.com/api/characters/1"
            target="_blank"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Ejemplo
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
          Construido por{" "}
          <a
            href="https://luisrocharo.com"
            target="_blank"
            className="text-black hover:underline"
          >
            Luis Rocha
          </a>
          . Inspirado en APIs abiertas y documentaciones modernas.
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Este proyecto utiliza datos de{" "}
          <a
            href="https://horizon.fandom.com/wiki/Horizon_Wiki"
            target="_blank"
            className="text-black hover:underline"
          >
            Horizon Wiki
          </a>
          . Datos y contenido bajo licencia{" "}
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
