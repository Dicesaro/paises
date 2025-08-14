import { useState, useEffect, useRef } from "react";
import { Country } from "./components/Country";
import { useFlags } from "./hooks/useFlags";
import "./App.css";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede hacer una busqueda vacía");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar un pais por número");
    }

    if (search.length < 3) {
      setError("La búsqueda debe ser de al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}
export function App() {
  const { search, updateSearch, error } = useSearch();
  const { country, loading, getCountry } = useFlags({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getCountry({ search });
  };

  // const handleSort = () => {
  //   setSort(!sort);
  // };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  };

  return (
    <div>
      <header className="App-header">
        <h1>Busca tu pais</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="search"
            type="text"
            placeholder="Perú, Hungary, España ..."
          />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main className="App-main">
        {loading ? (
          <p style={{ color: "#164176", textAlign: "center" }}>Cargando...</p>
        ) : (
          <Country country={country} />
        )}
      </main>
    </div>
  );
}
