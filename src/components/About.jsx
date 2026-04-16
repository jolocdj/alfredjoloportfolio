import { MapPin, UserRound } from "lucide-react";

export default function About({ dark }) {
  return (
    <>
      <section
        id="about"
        className={`relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 transition-colors duration-300 ${
          dark ? "bg-transparent text-white" : "bg-transparent text-[#0f172a]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[18%] top-[22%] h-[260px] w-[260px] rounded-full border border-indigo-400/10" />

          <div className="absolute right-[22%] top-[18%] h-3 w-3 rounded-full bg-violet-400/90 float-dot-1" />
          <div className="absolute right-[10%] top-[39%] h-3 w-3 rounded-full bg-fuchsia-400/85 float-dot-2" />
          <div className="absolute right-[15%] top-[74%] h-4 w-4 rounded-full bg-indigo-400/85 float-dot-3" />
          <div className="absolute right-[30%] top-[40%] h-4 w-4 rounded-full bg-indigo-400/85 float-dot-4" />

          <div className="absolute right-[14%] top-[20%] float-user-wrap">
            <div className="h-[130px] w-[130px] rounded-[28px] border border-white/20 bg-transparent rotate-box flex items-center justify-center">
              <div className="counter-rotate flex items-center justify-center">
                <UserRound className="h-10 w-10 text-indigo-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1100px]">
          {" "}
          {/* Heading */}
          <div className="max-w-2xl">
            {" "}
            <h2 className="text-2xl md:text-5xl font-bold">About Me</h2>
            <p
              className={`mt-5 text-sm text-xl
 ${dark ? "text-gray-400" : "text-slate-500"}`}
            >
              Software Developer focused on building reliable and scalable web
              applications.
            </p>
          </div>
          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] items-stretch">
            {" "}
            {/* Main card */}
            <div className="rounded-[32px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 p-[1px]">
              <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="profile-img h-28 w-28 rounded-xl object-cover transition-all duration-300 ease-out hover:shadow-2xl"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">Alfred Jolo De Jesus</h3>
                    <p className="text-white/80 mt-1">Software Developer</p>
                    <p className="mt-4 text-white/90">
                      BSIT graduate from Bulacan State University. Specializing
                      in Python and Javascript for back-end, with front-end
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

      <style>{`

   @keyframes floatImg {
  0%, 100% {
    transform: translateY(-2px) scale(1.08);
  }
  50% {
    transform: translateY(-8px) scale(1.08);
  }
}

.profile-img:hover {
  animation: floatImg 2.0s ease-in-out infinite;
}
     @keyframes rotateBox {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

      @keyframes floatA {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-14px) translateX(6px); }
      }

      @keyframes floatB {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(10px) translateX(-8px); }
      }

      @keyframes floatC {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-16px) translateX(4px); }
      }

        @keyframes floatD {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-16px) translateX(4px); }
      }


    @keyframes floatUserBox {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.float-user-wrap {
  animation: floatUserBox 4s ease-in-out infinite;
}

.rotate-box {
  animation: rotateBox 12s linear infinite;
  transform-origin: center;
}

.counter-rotate {
  animation: rotateBox 12s linear infinite reverse;
  transform-origin: center;
}
      .float-dot-1 {
        animation: floatA 6s ease-in-out infinite;
      }

      .float-dot-2 {
        animation: floatB 8s ease-in-out infinite;
      }

      .float-dot-3 {
        animation: floatC 7s ease-in-out infinite;
      }

        .float-dot-4 {
        animation: floatD 7s ease-in-out infinite;
      }
    `}</style>
    </>
  );
}
