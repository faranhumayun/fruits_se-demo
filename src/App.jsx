import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
