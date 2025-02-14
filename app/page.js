import Contact from "./components/contact";
import Intro from "./components/introduction";
import Journey from "./components/journey";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="my-8" id="home">
      {/* Landing and Intro sections on larger screens */}
      <div className="flex flex-col md:flex-row mt-6">
        <div className="md:w-2/3">
          <Landing />
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <Intro />
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-16">
        <Projects />
      </div>

      {/* Journey Section */}
      <div className="mt-16">
        <Journey />
      </div>

      {/* Contact Section */}
      <div className="mt-16">
        <Contact />
      </div>
    </main>
  );
}
