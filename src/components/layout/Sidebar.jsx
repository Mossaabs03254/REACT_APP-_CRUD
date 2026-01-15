export default function Sidebar({ setPage }) {
  return (
    <aside className="w-56 bg-white border-r p-4">
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => setPage("home")}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
          >
            🏠 Accueil
          </button>
        </li>

        <li>
          <button
            onClick={() => setPage("users")}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
          >
            👤 Utilisateurs
          </button>
        </li>
      </ul>
    </aside>
  );
}

