import { useState } from "react";
import cryptidCard from "./pages/components/cryptidCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <aside className="cryptidBoard">
          <cryptidCard />
        </aside>
        <section className="soundBoard">
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </section>
      </main>
    </>
  );
}

export default App;
