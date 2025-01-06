import { FloatingNav } from "./components/Dock";
import { Hero } from "./components/Hero";

// import { FloatingDock } from "./components/Dock";
function App() {
  return (
    <section className="flex lg:flex-row flex-col-reverse ">
      <div className=" lg:p-4 z-50">
        <FloatingNav />
      </div>
      <div className="lg:p-4">
        <Hero />
      </div>
    </section>
  );
}

export default App;
