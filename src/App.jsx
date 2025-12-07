import Header from "./components/Header";
import LiquidBackground from "./components/LiquidBackground";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="bg-bg text-main">
      <LiquidBackground>
        <Header />
        <Hero />
      </LiquidBackground>
    </div>
  );
}

export default App;
