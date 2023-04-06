import "./App.css";
import "./navbar.js";

function App() {
  return (
    <div className="bg-gray-700 p-5">
      <navbar />
      <div className="px-5 text-center">
        <header className="rechnungssoftware">
          <h1 className="text-4xl text-gray-300"> Prototype V1.0 </h1>
          <p className="italic text-gray-300"> Hier entsteht eine App </p>
        </header>
      </div>
      <navbar />
    </div>
  );
}

export default App;
