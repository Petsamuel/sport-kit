import { FloatingNav } from "./components/Dock";
import { Hero } from "./components/Hero";

// import { FloatingDock } from "./components/Dock";
function App() {
  return (
    <section className="flex gap-2 h-screen overflow-y-hidden">
      <div className=" p-4">
        <FloatingNav />
      </div>
      <div className="basis-full p-4">
        <Hero />
      </div>
    </section>
  );
}

export default App;
