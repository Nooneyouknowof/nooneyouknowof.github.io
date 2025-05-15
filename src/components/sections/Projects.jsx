import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Here */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">MECAZON</h3>
              <p className="text-gray-400 mb-4">
                MECAZON is a mock e-commerce platform inspired by Amazon,
                developed as a class project in a two-week sprint at West-MEC.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "CSS",
                  "Vite",
                  "Axios",
                  "Express.js",
                  "MongoDB",
                  "Node.js",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/WestMecCoding/3pm-MECAZON-client-production"
                  className="text-blue-400 hover:text-blue-300 transtition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src="./at_at.gif" alt="Walking AT-AT Animation" />
              <h3 className="text-xl font-bold mb-2">
                AT-AT Walking Animation
              </h3>
              <p className="text-gray-400 mb-4">
                2D procedural AT-AT walking animation. The project uses inverse
                kinematics to simulate realistic leg movement, combining complex
                math and code into a fully dynamic and functional animation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML", "CSS", "Canvas API"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nooneyouknowof/AT-AT-Walking-Animation"
                  className="text-blue-400 hover:text-blue-300 transtition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Paralax Animation</h3>
              <p className="text-gray-400 mb-4">
                A sliding 2D procedural paralax animation built with vanilla
                JavaScript that uses layered Perlin noise to create moving
                clouds and dynamic mountain terrain. It combines math and modern
                rending techniques to generate a smooth, ever-changing
                environment in real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML", "Canvas API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transtition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Trust-US Banking</h3>
              <p className="text-gray-400 mb-4">
                Trust-US is a group project focused on creating a secure and
                user-friendly banking web application. The app features a
                back-end server for handling user data and API endpoints,
                alongside a clean, functional UI inspired by real-world banking
                sites like Chase.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transtition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
