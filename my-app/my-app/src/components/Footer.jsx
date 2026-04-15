export default function Footer() {
  return (
    <footer className="relative w-full px-20 pt-24 pb-32 text-gray-600 dark:text-gray-400">
      {" "}
      <div className="max-w-[1600px] mx-auto">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-gray-900 dark:text-white text-xl font-semibold mb-2 transition-colors duration-300">
              harvs.
            </h2>{" "}
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {" "}
              Back-End Engineer crafting digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Home", "About", "Works", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {" "}
            <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors duration-300">
              🐙
            </span>{" "}
            <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors duration-300">
              in
            </span>{" "}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/10 dark:bg-white/10 mb-6 transition-colors duration-300" />
        {/* Bottom Row */}
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
          {" "}
          <p>© 2026 Harvey Arboleda. All rights reserved.</p>
          <p>Powered by coffee ☕ & supervised by Summe 🐱</p>
        </div>
      </div>
    </footer>
  );
}
