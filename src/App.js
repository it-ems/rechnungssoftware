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
        <div>
          <ul>
            <li>
              {" "}
              <button>
                <td
                  onClick={() =>
                    window.open("https://www.agentur247.de", "_blank")
                  }
                >
                  Anmelden
                </td>
              </button>
            </li>
            <li>Home</li>
            <li>Service</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              class="h-6 w-6 text-white"
              xmlns="fa fa-home"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              fa fa-home
            </svg>
          </span>
        </div>
        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}

export default App;
