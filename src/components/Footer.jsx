import { Link } from "react-router-dom";
export default function Footer({ dark }) {
  return (
    <>
      {/* Separator */}
      <div
        className="mt-28 mb-12 h-px w-screen relative left-1/2 -translate-x-1/2"
        style={{
          background: dark
            ? "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.14), rgba(255,255,255,0.08))"
            : "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.12), rgba(0,0,0,0.05))",
        }}
      />

      {/* Footer */}
      <div className="w-full max-w-[1360px] mx-auto text-gray-500 dark:text-gray-400 px-6 md:px-12 lg:px-20 pb-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-10">
          {/* Left */}
          <div className="max-w-[320px]">
            <img
              src="/logo.png"
              alt="Logo"
              className={`h-15 w-auto mb-4 transition duration-300 object-contain ${
                dark ? "invert-0" : "invert"
              }`}
            />
            <p className="text-sm leading-6">
              Software developer crafting digital experiences.
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-8 md:gap-12 text-sm flex-wrap">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Works", path: "/works" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/jolocdj"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.58 9.58 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/alfred-jolo-de-jesus-5227b7379/?locale=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6 bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p>© 2026 Alfred Jolo De Jesus. All rights reserved.</p>
          <p>Powered by coffee ☕ & supervised by Summer! 🐱</p>
        </div>
      </div>
    </>
  );
}
