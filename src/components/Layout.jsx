// Layout.jsx
export default function Layout({ children }) {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/horizon.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* capa global glass única */}
      <div className="absolute inset-0 bg-black/20" />

      {/* brillo superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* contenido */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
