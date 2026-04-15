import { MapPin, User } from "lucide-react";

export default function About({ dark }) {
  return (
    <section
      id="about"
      className={`relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 transition-colors duration-300 ${
        dark ? "bg-[#050816] text-white" : "bg-[#f7f8fc] text-[#0f172a]"
      }`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            dark ? "bg-indigo-500/10" : "bg-indigo-400/10"
          }`}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: dark
              ? `
                    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                `
              : `
                    linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)
                `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Floating shapes */}
        <div className="absolute right-[14%] top-[23%] h-48 w-48 rounded-full border border-white/10" />
        <div
          className={`absolute right-[13%] top-[27%] flex h-36 w-36 rotate-[-10deg] items-center justify-center rounded-[28px] border ${
            dark
              ? "border-white/10 bg-white/5"
              : "border-slate-300/70 bg-white/50"
          } backdrop-blur-md`}
        >
          <User size={42} className="text-indigo-400" />
        </div>
      </div>

      <div className="relative z-10 ml-auto mr-10 max-w-[1200px]">
        {" "}
        {/* Heading */}
        <div className="max-w-2xl">
          {" "}
          <h2 className="text-2xl md:text-5xl font-bold">About Me</h2>
          <p
            className={`mt-5 text-sm text-xl
 ${dark ? "text-gray-400" : "text-slate-500"}`}
          >
            Software Engineer focused on building reliable and scalable web
            applications.
          </p>
        </div>
        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] items-stretch">
          {" "}
          {/* Main card */}
          <div className="rounded-[32px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 p-[1px]">
            <div className="rounded-[31px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 p-8 text-white">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-28 w-28 rounded-xl object-cover"
                />

                <div>
                  <h3 className="text-2xl font-bold">Alfred Jolo De Jesus</h3>
                  <p className="text-white/80 mt-1">Software Engineer</p>
                  <p className="mt-4 text-white/90">
                    BSIT graduate from Bulacan State University. Specializing in
                    Laravel and CodeIgniter for back-end, with front-end
                    experience in Vue.js and React.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Side card */}
          <div
            className={`rounded-[32px] border p-8 backdrop-blur-xl ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-slate-300 bg-white/60"
            }`}
          >
            <div className="mb-6">
              <MapPin size={26} />
            </div>
            <h4 className="text-xl font-semibold">Based in</h4>
            <p className={dark ? "text-gray-400" : "text-slate-500"}>
              Philippines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
