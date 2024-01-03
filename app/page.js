
import Contact from "./components/contact";
import Intro from "./components/introduction"
import Journey from "./components/journey";

import Landing from "./components/landing";
import Projects from "./components/projects";
import Services from "./components/services";
export default function Home() {
  return (
    <main className="my-8 " id="home">
      <div className="flex h-lvh  mt-16">
        <div className="w-2/3">
          <Landing />
        </div>
        <div className="w-1/3">
          <Intro />
        </div>
      </div>
      <div className="">
        <Projects />
      </div>
      {/* <div className="">
        <Services />
      </div> */}
      <div>
        <Journey/>
      </div>
      <div className="">
        <Contact />
      </div>

    </main>
  )
}
