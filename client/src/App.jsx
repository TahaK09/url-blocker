import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/nav.jsx";
import Hero from "./components/hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen">
        <Nav />
        <Hero />
      </div>
    </>
  );
}

export default App;
